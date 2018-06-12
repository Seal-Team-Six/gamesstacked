import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/store'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'
import SocialButton from './UI/SocialButton'

/**
 * COMPONENT
 */

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    // <div>
    //   <Form onSubmit={handleSubmit} name={name}>
    //     <div>
    //       <input name="email" type="text" placeholder="Email" />
    //     </div>
    //     <div>
    //       <input name="password" type="password" placeholder="Password" />
    //     </div>
    //     <div>
    //       <Button type="submit">{displayName}</Button>
    //     </div>
    //     {error && error.response && <div> {error.response.data} </div>}
    //   </Form>
    //   <SocialButton
    //     href="/auth/google"
    //     displayName={displayName}
    //     className="google plus"
    //     name="Google"
    //   />
    // </div>

    <div className="login-form">
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
          <Form onSubmit={handleSubmit} name={name} size="large">
            <Segment stacked>
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

              <Button type="submit" color="teal" fluid size="large">
                {displayName}
              </Button>
            </Segment>
            {error && error.response && <div> {error.response.data} </div>}
          </Form>
          <div>
            <SocialButton
              href="/auth/google"
              displayName={displayName}
              className="google plus"
              name="Google"
            />
          </div>
          <Message>
            New to us? <a href="#"> Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
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

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
