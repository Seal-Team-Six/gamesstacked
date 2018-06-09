import axios from 'axios'

// ACTIONS
const GET_CARDS = 'GET_CARDS'
const DELETE_CARD = 'DELETE_CARD'
const EDIT_CARD = 'EDIT_CARD'
const REQUEST_CARDS = 'REQUEST_CARDS'
const ADD_CARD = 'ADD_CARD'

// INITIAL STATE
const initialState = {
  cards: [],
  isLoading: false
}

// ACTION CREATORS
export const requestCards = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_CARDS
    })
  }
}

export const getCards = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/cards/${id}`)
      dispatch({
        type: GET_CARDS,
        payload: data
      })
    } catch (err) {
      throw err
    }
  }
}

export const deleteCard = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cards/${id}`)
      dispatch({
        type: DELETE_CARD,
        payload: id
      })
    } catch (err) {
      throw err
    }
  }
}

export const editCard = (formData, id) => {
  return async dispatch => {
    try {
      const updatedCard = await axios.put(`/api/cards/${id}`, formData)
      dispatch({
        type: EDIT_CARD,
        payload: updatedCard
      })
    } catch (err) {
      throw err
    }
  }
}

export const addCard = formData => {
  return async dispatch => {
    try {
      const addedCard = await axios.post('/api/cards', formData)
      dispatch({
        type: ADD_CARD,
        payload: addedCard
      })
    } catch (err) {
      throw err
    }
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
