import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/store'

import {Grid, Button, Form, Message, Segment, Header} from 'semantic-ui-react'
import SocialButton from './UI/SocialButton'
import {Link} from 'react-router-dom'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="login-form">
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
        <Grid.Column style={{maxWidth: 450}}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://cdn.onlinewebfonts.com/svg/img_332705.png" />{' '}
            Log-in to your account
          </Header>
          <Segment stacked>
            <Form onSubmit={handleSubmit} name={name} size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
              />
              <div className="formGroup">
                <Button type="submit" color="teal" fluid size="large">
                  {displayName}
                </Button>
              </div>

              {error && error.response && <div> {error.response.data} </div>}
            </Form>

            <SocialButton
              href="/auth/google"
              displayName={displayName}
              className="google plus"
              name="Google"
            />
          </Segment>
          <Message>
            New to us? <Link to="/register"> Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Sign in',
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

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
