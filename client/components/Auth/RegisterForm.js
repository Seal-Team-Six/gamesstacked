import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
import {auth, notGoogleRegister} from '../../reducers/store'
import {Icon, Button, Input, List, Container, Form} from 'semantic-ui-react'
import SocialButton from '../UI/SocialButton'
// import Signup from '../auth-form'

/**
 * COMPONENT
 */
const RegForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} name={name}>
          <Form.Group widths="equal">
            <Input name="firstName" type="text" placeholder="First Name" />
            <Input name="lastName" type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group>
            <Input name="email" type="text" placeholder="Email" />
            <Input name="address" type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group widths="equal">
            <Input name="city" type="text" placeholder="City" />
            <Input name="state" type="text" placeholder="State" />
            <Input name="zipCode" type="text" placeholder="Zip Code" />
          </Form.Group>
          <Input name="phone" type="text" placeholder="Phone" fluid />
          <Input name="password" type="password" placeholder="Password" fluid />

          <Input
            name="imageUrl"
            type="text"
            placeholder="Profile Pic Image Url"
            fluid
          />
          <div>
            <Button type="submit">{displayName}</Button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>

      <div>{/* <Signup /> */}</div>
      <SocialButton
        href="/auth/google"
        displayName={displayName}
        className="google plus"
        name="Google"
      />
    </div>
  )
}

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
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const password = evt.target.password.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const imageUrl = evt.target.imageUrl.value
      const address = evt.target.address.value
      const city = evt.target.city.value
      const state = evt.target.state.value
      const zipCode = evt.target.zipCode.value
      const phone = evt.target.phone.value
      const email = evt.target.email.value
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
      )
    }
  }
}

export const RegisterForm = connect(mapSignup, mapDispatch)(RegForm)

/**
 * PROP TYPES
 */
// RegisterForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };
