import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/store'

import {Menu, Container, Button} from 'semantic-ui-react'

class Navbar extends React.Component {
  renderSessionLinks() {
    const {isLoggedIn} = this.props

    if (isLoggedIn) {
      return (
        <Link to="/logout" onClick={this.props.handleClick}>
          <Menu.Item key={1}>Logout</Menu.Item>
        </Link>
      )
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
          <Menu.Item header>Games Stacked</Menu.Item>
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
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
