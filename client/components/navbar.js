import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../reducers/store'

import { Menu, Container, Button } from 'semantic-ui-react';

class Navbar extends React.Component {
  renderSessionLinks () {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return [
        <Menu.Item key={1} as={Link} to="/logout">
          Logout
        </Menu.Item>
      ]
    } else {
      return [
        <Menu.Item key={1} as={Link} to="/login">
          Login
        </Menu.Item>,
        <Menu.Item key={2} as={Link} to="/register">
          Register
        </Menu.Item>
      ]
    }
  }

  render () {
    return (
      <Menu inverted fixed="top">
        <Menu.Item header>
          Games Stacked
        </Menu.Item>
        <Menu.Menu position='right'>
          { this.renderSessionLinks() }
          <Menu.Item as={Link} to="/cart">
            Cart (0)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

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

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}