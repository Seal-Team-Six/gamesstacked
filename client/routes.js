import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login} from './components'
import Products from './components/Products'
import Cart from './containers/Cart'
import ProductDetails from './components/Products/ProductDetails'
import {RegisterForm} from './components/Auth/RegisterForm'
import ThankYou from './components/ThankYou'
import Account from './components/Account/Account'
import CheckoutContainer from './components/CheckoutContainer'

import AuthenticateAdmin from './hoc/AdminAuthentication'
import AdminRoutes from './components/Admin/AdminRoutes'
import SingleOrderNonAdmin from './components/Admin/Orders/SingleOrderNonAdmin'

const Routes = props => {
  const {isLoggedIn} = props

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={CheckoutContainer} />

      {/* Routes placed here are only available after logging in */}
      {isLoggedIn && (
        <Switch>
          <Route exact path="/user" component={Account} />
          <Route exact path="/checkout" component={CheckoutContainer} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route path="/admin" component={AuthenticateAdmin(AdminRoutes)} />
          <Route path="/orders/:id" component={SingleOrderNonAdmin} />
          <Route component={Products} />
        </Switch>
      )}
      <Route component={Products} />
    </Switch>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked when the url
// changes

export default withRouter(connect(mapState)(Routes))

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
