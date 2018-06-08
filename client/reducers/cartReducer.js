import axios from 'axios'

const ADD_ITEM = 'ADD_ITEM'
const REQUEST_CART = 'REQUEST_CART'
const SET_CART = 'SET_CART'
const RESET_CART = 'RESET_CART'
const SET_ITEMS = 'SET_ITEMS'
const DELETE_ITEM = 'DELETE_ITEM'
const ADD_QUANTITY = 'ADD_QUANTITY'

const initialState = {
  cartId: null,
  cartItems: [],
  totalPrice: 0,
  isLoading: false
}

export const requestCart = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_CART
    })
  }
}

export const setCart = userId => {
  return dispatch => {
    if (userId) {
      axios
        .post('/api/cart', userId)
        .then(res => {
          dispatch({
            type: SET_CART,
            payload: {
              id: res.data[0].id,
              cartItems: res.data[0].cartItems
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else if (!localStorage.getItem('cart')) {
      console.log('cart created in localStorage')
      localStorage.setItem(
        'cart',
        JSON.stringify({
          id: 'guestUserCart',
          cartItems: []
        })
      )
    }
  }
}

export const addToCart = (productId, cartId, userId) => {
  return dispatch => {
    if (userId) {
      axios
        .post('/api/cart_items', {productId, cartId})
        .then(res => {
          dispatch({
            type: ADD_ITEM,
            payload: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      let localCart = JSON.parse(localStorage.getItem('cart'))
      localCart.cartItems.push({id: localCart.cartItems.length, productId})

      localStorage.setItem('cart', JSON.stringify(localCart))

      dispatch({
        type: ADD_ITEM,
        payload: {productId}
      })
    }
  }
}

export const setItems = () => {
  const localCart = JSON.parse(localStorage.getItem('cart'))
  return dispatch => {
    dispatch({
      type: SET_ITEMS,
      payload: localCart.cartItems
    })
  }
}

export const deleteItem = id => {
  return dispatch => {
    axios
      .delete(`/api/cart_items/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_ITEM,
          payload: id
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const addQuantity = (id, quantity) => {
  return dispatch => {
    axios
      .put(`/api/cart_items/${id}`, {quantity})
      .then(res => {
        dispatch({
          type: ADD_QUANTITY,
          payload: res.data.item
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const resetCart = () => {
  return dispatch => {
    dispatch({
      type: RESET_CART
    })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CART: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SET_CART:
      const items = action.payload.cartItems

      return {
        ...state,
        cartId: action.payload.id,
        isLoading: false,
        cartItems: items,
        totalPrice: items.length
          ? items
              .map(item => parseFloat(item.product.price) * item.quantity)
              .reduce((a, b) => a + b)
          : 0
      }
    case RESET_CART:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0
      }
    case SET_ITEMS:
      return {
        ...state,
        cartItems: action.payload
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + parseFloat(action.payload.product.price)
      }
    case DELETE_ITEM:
      const item = state.cartItems.find(item => item.id === action.payload)

      return {
        ...state,
        cartItems: state.cartItems.filter(item => {
          return item.id !== action.payload
        }),
        totalPrice: state.totalPrice - item.product.price * item.quantity
      }
    case ADD_QUANTITY:
      const cartItem = state.cartItems.find(
        item => item.id === action.payload.id
      )

      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return action.payload
          }
          return item
        }),
        totalPrice:
          state.totalPrice +
          parseFloat(action.payload.product.price) *
            (action.payload.quantity - cartItem.quantity)
      }
    default:
      return state
  }
}

export default reducer
