import axios from 'axios';

const ADD_ITEM    = 'ADD_ITEM';
const ADD_ITEM_LOCAL = 'ADD_ITEM_LOCAL';
const SET_CART    = 'SET_CART';
const SET_ITEMS   = 'SET_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
	cartId: null,
	cartItems: []
}

export const setCart = (userId) => {
	return dispatch => {
		if (userId) {
			axios
				.post('/api/cart', userId)
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
		} else if (!localStorage.getItem('cart')) {
			console.log('cart created in localStorage')
			localStorage
				.setItem(
					'cart', 
					JSON.stringify(
						{ 
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
		} else {
			let localCart = JSON.parse(localStorage.getItem('cart'))
			localCart.cartItems.push({id: productId})

			localStorage
				.setItem(
					'cart', 
					JSON.stringify(
							localCart
						)
					)

			dispatch({
				type: ADD_ITEM,
				payload: productId
			})
		}
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