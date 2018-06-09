import axios from 'axios'

// ACTIONS
const GET_CARDS = 'GET_CARDS'
const DELETE_CARD = 'DELETE_CARD'
const EDIT_CARD = 'EDIT_CARD'
const REQUEST_CARDS = 'REQUEST_CARDS'
const ADD_CARD = 'ADD_CARD'
const SELECT_CARD = 'SELECT_CARD'

// INITIAL STATE
const initialState = {
  cards: [],
  selectedCard: {},
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

export const selectCard = card => ({type: SELECT_CARD, payload: card})

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return {
        ...state,
        isLoading: true
      }
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        isLoading: false
      }
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => {
          return card.id !== action.payload
        }),
        isLoading: false
      }
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload.id) {
            return action.payload
          }
          return card
        }),
        isLoading: false
      }
    case ADD_CARD:
      return {
        ...state,
        cards: [action.payload, ...state.cards],
        isLoading: false
      }
    case SELECT_CARD:
      return {
        ...state,
        selectedCard: action.payload
      }
    default:
      return state
  }
}

export default reducer
