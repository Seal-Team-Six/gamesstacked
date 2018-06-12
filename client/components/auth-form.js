import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/store'

import {Button, Form} from 'semantic-ui-react'
import SocialButton from './UI/SocialButton'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        <div>
          <input name="email" type="text" placeholder="Email" />
        </div>
        <div>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div>
          <Button type="submit">{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      <SocialButton
        href="/auth/google"
        displayName={displayName}
        className="google plus"
        name="Google"
      />
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

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
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
