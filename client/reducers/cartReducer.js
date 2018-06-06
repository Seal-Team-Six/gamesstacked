import axios from 'axios';

const ADD_ITEM    = 'ADD_ITEM';
const SET_CART    = 'SET_CART';
const SET_ITEMS   = 'SET_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
	cartId: null,
	cartItems: []
}

export const setCart = (data) => {
	return dispatch => {
		axios
			.post('/api/cart', data)
			.then(res => {
				dispatch({
					type: SET_CART,
					payload: {
						id: res.data[0].id,
						cartItems: res.data[0].cartItems,
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

export const addToCart = (productId, cartId) => {
	return dispatch => {
		axios
			.post('/api/cart_items', { productId, cartId })
			.then(res => {
				dispatch({
					type: ADD_ITEM,
					payload: res.data
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cartId: action.payload.id,
				cartItems: action.payload.cartItems
			}
		case SET_ITEMS:
			return {
				...state,
				cartItems: action.payload
			}
		case ADD_ITEM:
			return {
				...state,
				cartItems: [ ...state.cartItems, action.payload ]
			}
		case DELETE_ITEM:
			return {
				...state,
				cartItems: [ 
					...state.cartItems.slice(0, action.payload),  
					...state.cartItems.slice(action.payload + 1)
				]
			}
		default:
			return state;
	}
}

export default reducer;