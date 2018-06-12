import axios from 'axios'

const FETCH_USERS = 'FETCH_USERS'

const initialState = {
  collection: [],
  isLoading: false
}

export const fetchUsers = () => {
  return dispatch => {
    axios
      .get('/api/users')
      .then(res => {
        console.log(res)
        dispatch({
          type: FETCH_USERS,
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
    case FETCH_USERS:
      return {
        ...state,
        collection: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducer
