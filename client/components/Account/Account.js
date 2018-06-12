import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {RegisterForm} from '../Auth/RegisterForm'
import {EditAccountForm} from '../Auth/EditAccountForm'
import {Container, Button} from 'semantic-ui-react'

/**
 * COMPONENT
 */

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const {user} = this.props

    return (
      <Container>
        <div>
          <div className="accountDiv">
            <img className="resizeMed" src={user.imageUrl} />
            <h3>Welcome, {user.firstName}</h3>
            <p>You spent a lot of money last time.</p>
            <p>Please do so again!</p>
          </div>

          <div>
            <Button class="formGroup" onClick={this.toggleHidden.bind(this)}>
              Edit Account Info
            </Button>
            {!this.state.isHidden && <EditAccountForm user={this.props.user} />}
          </div>
        </div>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(Account)
