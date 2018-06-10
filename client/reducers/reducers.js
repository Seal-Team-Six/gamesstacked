import user from './user'
import addressReducer from './addressReducer'
import products from './productsReducer'
import cart from './cartReducer'
import modal from './modalReducer'
import {reducer as reduxForm} from 'redux-form'

export default {
  form: reduxForm,
  user,
  addressReducer,
  products,
  cart,
  modal
}
