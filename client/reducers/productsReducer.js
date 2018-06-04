const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

const initialState = {
  products: [
    { id: 1, name: 'Super Mario Bros', price: 0, inStock: 100 },
    { id: 2, name: 'Final Fantasy', price: 0, inStock: 100 },
  ]
}

export const fetchProducts = () => {
	return dispatch => {
		dispatch({
			type: FETCH_PRODUCTS,
			payload: 'res.data'
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