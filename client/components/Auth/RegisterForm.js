import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth, notGoogleRegister } from '../../reducers/store';
import { Icon, Button } from 'semantic-ui-react';
import SocialButton from '../UI/SocialButton';
// import Signup from '../auth-form'

/**
 * COMPONENT
 */
const RegForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      This is reg form
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />
        </div>

        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
        </div>

        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>

        <div>
          <label htmlFor="imageUrl">
            <small>Image Url</small>
          </label>
          <input name="imageUrl" type="text" />
        </div>

        <div>
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input name="address" type="text" />
        </div>

        <div>
          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" />
        </div>

        <div>
          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" />
        </div>

        <div>
          <label htmlFor="zipCode">
            <small>Zip Code</small>
          </label>
          <input name="zipCode" type="text" />
        </div>

        <div>
          <label htmlFor="phone">
            <small>Phone</small>
          </label>
          <input name="phone" type="text" />
        </div>

        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>

        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div>{/* <Signup /> */}</div>
      <SocialButton
        href="/auth/google"
        displayName={displayName}
        className="google plus"
        name="Google"
      />
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const password = evt.target.password.value;

      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const imageUrl = evt.target.imageUrl.value;
      const address = evt.target.address.value;
      const city = evt.target.city.value;
      const state = evt.target.state.value;
      const zipCode = evt.target.zipCode.value;
      const phone = evt.target.phone.value;

      const email = evt.target.email.value;
      dispatch(
        notGoogleRegister(
          {
            email,
            password,

            firstName,
            lastName,
            imageUrl,
            address,
            city,
            state,
            zipCode,
            phone
          },
          formName
        )
      );
    }
  };
};

export const RegisterForm = connect(
  mapSignup,
  mapDispatch
)(RegForm);

/**
 * PROP TYPES
 */
// RegisterForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };
