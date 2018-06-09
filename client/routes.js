import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './reducers/store'
import Products from './components/Products'
import Home from './containers/Home'
import Cart from './containers/Cart'
import ProductDetails from './components/Products/ProductDetails'
import moduleName from '../client/components/Products/'
import CartSideBar from './components/Cart/CartSideBar'
import {RegisterForm} from './components/Auth/RegisterForm'

import {setCart, setItems, requestCart} from './reducers/cartReducer'
import {Account} from './components/Account/Account'
import CheckoutContainer from './components/CheckoutContainer'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    const {me, requestCart} = this.props

    me()
    requestCart()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {setCart} = this.props

    if (nextProps.user.id !== this.props.user.id) {
      setCart(nextProps.user.id)
    }
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        {/* Routes placed here are only available after logging in */}
        {isLoggedIn && (
          <Switch>
            <Route
              exact
              path="/user"
              render={history => (
                <Account history={history} user={this.props.user} />
              )}
            />
            <Route exact path="/home" component={UserHome} />
            <Route
              exact
              path="/checkout/address"
              component={CheckoutContainer}
            />
            <Route
              exact
              path="/checkout/credit"
              component={CheckoutContainer}
            />
            <Route component={Products} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Products} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user
    // that has a truthy id. Otherwise, state.user will be an empty object, and
    // state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked when the url
// changes

export default withRouter(
  connect(mapState, {
    me,
    setCart,
    setItems,
    requestCart
  })(Routes)
)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  // loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
