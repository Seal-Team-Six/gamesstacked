import axios from 'axios'
import history from '../history'
import {createLocalCart} from '../helpers'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const EDIT_USER = 'EDIT_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const editUser = editedUser => ({type: EDIT_USER, editedUser})

/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err))

export const auth = (email, password, method) => dispatch =>
  axios
    .post(`/auth/${method}`, {email, password})
    .then(
      res => {
        dispatch(getUser(res.data))
        history.push('/home')
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const notGoogleRegister = (
  {firstName, lastName, email, password},
  method
) => dispatch =>
  axios
    .post(`/auth/${method}`, {firstName, lastName, email, password})
    .then(
      res => {
        dispatch(getUser(res.data))
        history.push('/home')
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({error: authError}))
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const notGoogleEdit = (id, user) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/users/${id}`, user)
    console.log('()()()()()()()', data)
    console.log('%%%%%% updated user on from server!')
    dispatch(editUser(data))
  }
}

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(removeUser())
      history.push('/login')
      createLocalCart()
    })
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case EDIT_USER:
      return action.editedUser
    default:
      return state
  }
}
