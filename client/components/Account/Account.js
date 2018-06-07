import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
const Account = props => {
  const user = props.user;
  console.log('$$$$', props);

  return (
    <div>
      <h3>Welcome, {user.firstName}</h3>
      <p>You spent a lot of money last time. Please do so again!</p>
    </div>
  );
};

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
