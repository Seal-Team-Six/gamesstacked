import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/store'
import {resetCart} from '../reducers/cartReducer'

import {Menu, Icon} from 'semantic-ui-react'

class Navbar extends React.Component {
  handleLogOut = () => {
    const {handleClick, deleteCart} = this.props

    handleClick()
    deleteCart()
  }

  renderSessionLinks() {
    const {isLoggedIn} = this.props

    if (isLoggedIn) {
      return [
        <a onClick={this.handleLogOut} key={1}>
          <Menu.Item>Logout</Menu.Item>
        </a>,

        <Link key={2} to="/user">
          <Menu.Item>Account</Menu.Item>
        </Link>
      ]
    } else {
      return [
        <Link key={1} to="/login">
          <Menu.Item>Login</Menu.Item>
        </Link>,
        <Link key={2} to="/register">
          <Menu.Item>Register</Menu.Item>
        </Link>
      ]
    }
  }

  render() {
    const {cartItems} = this.props

    return (
      <Menu inverted fixed="top">
        <Link to="/">
          <Menu.Item header>
            <Icon name="gamepad" size="large" />
            Games Stacked
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          {this.renderSessionLinks()}
          <Link to="/cart">
            <Menu.Item>Cart({cartItems.length})</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.cart.cartItems
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(logout())
    },

    deleteCart: () => {
      dispatch(resetCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
