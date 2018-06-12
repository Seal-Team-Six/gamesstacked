import axios from 'axios'
import {createLocalCart} from '../helpers'

const ADD_ITEM = 'ADD_ITEM'
const REQUEST_CART = 'REQUEST_CART'
const SET_CART = 'SET_CART'
const SET_LOCAL_CART = 'SET_LOCAL_CART'
const RESET_CART = 'RESET_CART'
const SET_ITEMS = 'SET_ITEMS'
const DELETE_ITEM = 'DELETE_ITEM'
const ADD_QUANTITY = 'ADD_QUANTITY'

const initialState = {
  cartId: null,
  cartItems: [],
  totalPrice: 0,
  isLoading: false,
  cartQuantity: 0
}

// const localCart = JSON.parse(localStorage.getItem('cart'))

export const requestCart = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_CART
    })
  }
}

export const setCart = userId => {
  const localCart = JSON.parse(localStorage.getItem('cart'))

  return dispatch => {
    if (userId) {
      axios
        .post('/api/cart', userId)
        .then(res => {
          const {id, cartItems} = res.data[0]
          const items = res.data[1] ? [] : res.data[0].cartItems
          dispatch({
            type: SET_CART,
            payload: {
              id,
              cartItems: items
            }
          })

          localCart.cartItems.forEach(localItem => {
            if (
              !cartItems
                .map(item => item.productId)
                .includes(localItem.productId)
            ) {
              axios
                .post('/api/cart_items', {
                  quantity: Number(localItem.quantity),
                  cartId: res.data[0].id,
                  productId: localItem.productId,
                  userId
                })
                .then(res => {
                  dispatch({
                    type: ADD_ITEM,
                    payload: res.data
                  })
                })
            } else if (
              cartItems
                .map(item => item.productId)
                .includes(localItem.productId)
            ) {
              const cartItem = cartItems.find(
                item => item.productId === localItem.productId
              )
              axios
                .put(`/api/cart_items/${cartItem.id}`, {
                  quantity: cartItem.quantity + localItem.quantity
                })
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
          })

          localStorage.removeItem('cart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export const setLocalCart = () => {
  return dispatch => {
    if (!localStorage.getItem('cart')) {
      createLocalCart()
    }

    const localCart = JSON.parse(localStorage.getItem('cart'))

    dispatch({
      type: SET_CART,
      payload: {
        id: 'localCart',
        cartItems: localCart.cartItems.map(item => {
          return {
            ...item,
            productId: Number(item.productId)
          }
        })
      }
    })
  }
}

export const addToCart = (productId, cartId, userId, product) => {
  const localCart = JSON.parse(localStorage.getItem('cart'))

  return dispatch => {
    if (userId) {
      axios
        .post('/api/cart_items', {
          productId,
          cartId,
          userId
        })
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
      const length = localCart.cartItems.length
      const item = {
        id: length ? localCart.cartItems[length - 1].id + 1 : 1,
        productId: Number(productId),
        product,
        quantity: 1
      }
      localCart.cartItems.push(item)

      localStorage.setItem('cart', JSON.stringify(localCart))

      dispatch({
        type: ADD_ITEM,
        payload: item
      })
    }
  }
}

export const setItems = () => {
  return dispatch => {
    dispatch({
      type: SET_ITEMS,
      payload: localCart.cartItems
    })
  }
}

export const deleteItem = (id, userId) => {
  const localCart = JSON.parse(localStorage.getItem('cart'))

  return dispatch => {
    if (userId) {
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
    } else {
      localCart.cartItems = localCart.cartItems.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(localCart))

      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    }
  }
}

export const addQuantity = (id, quantity, userId) => {
  const localCart = JSON.parse(localStorage.getItem('cart'))

  return dispatch => {
    if (userId) {
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
    } else {
      const cartItem = localCart.cartItems.find(item => item.id === id)
      cartItem.quantity += Number(quantity - cartItem.quantity)
      localStorage.setItem('cart', JSON.stringify(localCart))

      dispatch({
        type: ADD_QUANTITY,
        payload: cartItem
      })
    }
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
          : 0,
        cartQuantity: items.length
          ? items.map(item => item.quantity).reduce((a, b) => a + b)
          : 0
      }
    case SET_LOCAL_CART:
      return {
        ...state,
        isLoading: false
      }
    case RESET_CART:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        cartQuantity: 0
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
        totalPrice: state.totalPrice + parseFloat(action.payload.product.price),
        cartQuantity: state.cartQuantity + 1
      }
    case DELETE_ITEM:
      const item = state.cartItems.find(item => item.id === action.payload)

      return {
        ...state,
        cartItems: state.cartItems.filter(item => {
          return item.id !== action.payload
        }),
        totalPrice: state.totalPrice - item.product.price * item.quantity,
        cartQuantity: state.cartQuantity - item.quantity
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
            (action.payload.quantity - cartItem.quantity),
        cartQuantity:
          state.cartQuantity + (action.payload.quantity - cartItem.quantity)
      }
    default:
      return state
  }
}

export default reducer
