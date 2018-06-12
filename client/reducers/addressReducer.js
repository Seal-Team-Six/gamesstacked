import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_ADDRESS = 'GOT_ADDRESS'
const MAKE_ADDRESS = 'MAKE_ADDRESS'
const REMOVE_ADDRESS = 'REMOVE_ADDRESS'
const EDIT_ADDRESS = 'EDIT_ADDRESS'

/**
 * INITIAL STATE
 */
const initialState = {
  addresses: []
}

/**
 * ACTION CREATORS
 */
const gotAddress = address => ({type: GOT_ADDRESS, address})
const addAddress = address => ({type: MAKE_ADDRESS, address})
const editAddress = editedAdress => ({type: EDIT_ADDRESS, editedAdress})
const deleteAddress = deletedAddress => ({type: REMOVE_ADDRESS, deletedAddress})

/**
 * THUNK CREATORS
 */
export const fetchAddresses = address => {
  return async dispatch => {
    const {data} = await axios.put(`/api/address`, address)
    console.log('%%%%%% fetched users addresses from server!')
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
    console.log('%%%%%% updated Address on server!')
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
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ADDRESS:
      return {...state, adresses: action.address}

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

    default:
      return state
  }
}
