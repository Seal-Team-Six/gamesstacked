import user from './user'
import products from './productsReducer'
import cart from './cartReducer'
import modal from './modalReducer'
import cards from './cardReducer'
import {reducer as reduxForm} from 'redux-form'

export default {
  form: reduxForm,
  user,
  products,
  cart,
  modal,
  cards
}
