import axios from 'axios'

const FETCH_ORDERS = 'FETCH_ORDERS'
const FETCH_ORDER = 'FETCH_ORDER'
const REQUEST_ORDERS = 'REQUEST_ORDERS'
const RESET_ORDER = 'RESET_ORDER'

const initialState = {
  collection: [],
  isLoading: false,
  selectedOrder: {}
}

export const resetOrder = () => {
  return dispatch => {
    dispatch({
      type: RESET_ORDER
    })
  }
}

export const requestOrders = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_ORDERS
    })
  }
}

export const fetchOrders = () => {
  return dispatch => {
    axios
      .get('/api/orders')
      .then(res => {
        dispatch({
          type: FETCH_ORDERS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchOrder = id => {
  return dispatch => {
    axios
      .get(`/api/orders/${id}`)
      .then(res => {
        dispatch({
          type: FETCH_ORDER,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        collection: action.payload,
        isLoading: false
      }
    case REQUEST_ORDERS:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_ORDER:
      return {
        ...state,
        selectedOrder: action.payload,
        isLoading: false
      }
    case RESET_ORDER:
      return {
        ...state,
        selectedOrder: {}
      }
    default:
      return state
  }
}

export default reducer
