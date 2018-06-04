import axios from 'axios';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const initialState = {
  products: [
    { id: 1, name: 'Super Mario Bros', price: 0, inStock: 100 },
    { id: 2, name: 'Final Fantasy', price: 0, inStock: 100 },
  ]
}

export const fetchProducts = () => {
	return dispatch => {
		axios
			.get('/api/products')
			.then(res => {
				dispatch({
					type: FETCH_PRODUCTS,
					payload: res.data,
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default reducer;