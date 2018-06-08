const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const toggleModal = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MODAL
    })
  }
}

const initialState = {
  showModal: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      }
    default:
      return state
  }
}

export default reducer
