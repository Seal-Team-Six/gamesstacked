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

    // <h1>BOILERMAKER</h1>
    // <nav>
    //   {isLoggedIn ? (
    //     <div>
    //       {/* The navbar will show these links after you log in */}
    //       <Link to="/home">Home</Link>
    //       <a href="#" onClick={handleClick}>
    //         Logout
    //       </a>
    //     </div>
    //   ) : (
    //     <div>
    //       {/* The navbar will show these links before you log in */}
    //       <Link to="/login">Login</Link>
    //       <Link to="/signup">Sign Up</Link>
    //     </div>
    //   )}
    // </nav>
    // <hr />