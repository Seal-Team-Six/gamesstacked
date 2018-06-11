import user from './user'
import addresses from './addressReducer'
import products from './productsReducer'
import cart from './cartReducer'
import modal from './modalReducer'
import cards from './cardReducer'
import {reducer as reduxForm} from 'redux-form'

export default {
  form: reduxForm,
  user,
  addresses,
  products,
  cart,
  modal,
  cards
}
