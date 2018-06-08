import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RegisterForm } from '../Auth/RegisterForm';
import { EditAccountForm} from '../Auth/EditAccountForm';

/**
 * COMPONENT
 */
export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const user = this.props.user;

    return (
      <div>
        <div>
          <h3>Welcome, {user.firstName}</h3>
          <p>You spent a lot of money last time. Please do so again!</p>
        </div>

        <div>
          <button onClick={this.toggleHidden.bind(this)}>
            Edit Account Info
          </button>
          {!this.state.isHidden && <EditAccountForm />}
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user.firstName
  };
};

export default connect(
  mapState,
  null
)(Account);
