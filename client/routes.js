import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome } from './components';
import { RegisterForm } from './components/Auth/RegisterForm';
import { Test } from './components/Auth/testComp';
import { me } from './reducers/store';
import Products from './components/Products';
import Home from './containers/Home';
import Cart from './containers/Cart';
import ProductDetails from './components/Products/ProductDetails';
import moduleName from '../client/components/Products/';

import { setCart } from './reducers/cartReducer';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    const { me, setCart, user } = this.props;

    me();
    if (user.id) {
      setCart(user.id);
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />{' '}
        {isLoggedIn && (
          <Switch>
            <Route exact path="/cart" component={Cart} />{' '}
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/" component={Products} />
      </Switch>
    );
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
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked when the url
// changes
export default withRouter(
  connect(
    mapState,
    { me, setCart }
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  // loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
