import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_ADDRESS = 'GOT_ADDRESS'
const MAKE_ADDRESS = 'MAKE_ADDRESS'
const REMOVE_ADDRESS = 'REMOVE_ADDRESS'
const EDIT_ADDRESS = 'EDIT_ADDRESS'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

/**
 * INITIAL STATE
 */
const initialState = {
  addresses: [],
  open: false
}

/**
 * ACTION CREATORS
 */
const gotAddress = address => ({type: GOT_ADDRESS, address})
const addAddress = address => ({type: MAKE_ADDRESS, address})
const editAddress = editedAddress => ({type: EDIT_ADDRESS, editedAddress})
const deleteAddress = deletedAddress => ({type: REMOVE_ADDRESS, deletedAddress})
export const openModal = () => ({
  type: OPEN_MODAL
})
export const closeModal = () => ({
  type: CLOSE_MODAL
})

/**
 * THUNK CREATORS
 */
export const fetchAddresses = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/address`)
    dispatch(gotAddress(data))
  }
}

export const postAddress = address => {
  return async dispatch => {
    const res = await axios.post(`/api/address`, address)
    const newAddress = res.data
    console.log('%%%%%% added address to server!')
    dispatch(addAddress(newAddress))
    // history.push('/checkout/address')
  }
}

export const putAddress = (id, address) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/address/${id}`, address)
    dispatch(editAddress(data))
  }
}

export const removeAddress = (id, address) => {
  return async dispatch => {
    const {data} = await axios.delete(`/api/address/${id}`, address)
    console.log('%%%%%% deleted Address from server!')
    dispatch(deleteAddress(id))
  }
}

/**
 * REDUCER
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ADDRESS:
      return {
        ...state,
        addresses: action.address,
        isLoading: false
      }

    case MAKE_ADDRESS: {
      return {
        ...state,
        students: [...state.address, action.newstudentContent]
      }
    }

    case EDIT_ADDRESS: {
      const addressToEdit = action.editedAddress.id
      return {
        ...state,
        addresses: state.addresses.map(address => {
          if (address.id === addressToEdit) {
            return action.editedAddress
          }
          return address
        })
      }
    }

    case REMOVE_ADDRESS: {
      return {
        ...state,
        adresses: state.adresses.filter(
          address => address.id !== action.deletedAddress
        )
      }
    }

    case OPEN_MODAL: {
      return {
        ...state,
        open: true
      }
    }

    case CLOSE_MODAL: {
      return {
        ...state,
        open: false
      }
    }

    default:
      return state
  }
}

export default reducer
