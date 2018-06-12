import user from './user'
import addresses from './addressReducer'
import products from './productsReducer'
import cart from './cartReducer'
import modal from './modalReducer'
import orders from './orderReducer'
import users from './usersReducer'

import {reducer as reduxForm} from 'redux-form'

export default {
  form: reduxForm,
  user,
  addresses,
  products,
  cart,
  modal,
  orders,
  users
}
