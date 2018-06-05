import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/store'

import {Menu, Container, Button} from 'semantic-ui-react';

const Navbar = ({handleClick, isLoggedIn}) => (
  <Menu inverted fixed="top">
    <Menu.Item header>
      Games Stacked
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item as={Link} to="/cart">
        Login
      </Menu.Item>
      <Menu.Item as={Link} to="/cart">
        Register
      </Menu.Item>
      <Menu.Item as={Link} to="/cart">
        Cart (0)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
