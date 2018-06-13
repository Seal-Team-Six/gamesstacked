import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth, notGoogleRegister} from '../../reducers/store'
import SocialButton from '../UI/SocialButton'
import {Field, reduxForm} from 'redux-form'

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'

/**
 * COMPONENT
 */

const FIELDS = [
  {label: 'First Name', name: 'firstName', icon: 'user'},
  {label: 'Last Name', name: 'lastName', icon: 'bug'},
  {label: 'Email', name: 'email', icon: 'mail'},
  {label: 'Password', name: 'password', icon: 'lock'},
  {label: 'Password Confirmation', name: 'passwordConfirm'}
]

class RegForm extends Component {
  renderField(field) {
    const {label, type, icon, input, meta: {error, touched}} = field
    return (
      <div>
        <Form.Input
          iconPosition="left"
          icon={icon}
          type={type}
          placeholder={label}
          {...input}
        />
        <div className="error">{touched ? error : ''}</div>
      </div>
    )
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props

    return (
      <div className="login-form">
        <style>{`
body > div,
body > div > div,
body > div > div > div.login-form {
  height: 100%;
}
`}</style>
        <Grid
          textAlign="center"
          style={{height: '100%'}}
          verticalAlign="middle"
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="https://cdn.onlinewebfonts.com/svg/img_332705.png" />{' '}
              Register your new account
            </Header>
            <Segment stacked>
              <Form
                onSubmit={handleSubmit(this.props.onHandleSubmit.bind(this))}
                name={name}
                size="large"
              >
                {FIELDS.map(field => {
                  return (
                    <Field
                      key={field.label}
                      type={
                        field.name.includes('password') ? 'password' : 'text'
                      }
                      component={this.renderField}
                      label={field.label}
                      name={field.name}
                      icon={field.icon}
                    />
                  )
                })}

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
              Read Terms <a> Read</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
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
    onHandleSubmit(formProps) {
      dispatch(notGoogleRegister(formProps, 'signup'))
    }
  }
}
function validate(formProps) {
  const errors = {},
    vowels = ['a', 'e', 'i', 'o']

  // Required fields
  FIELDS.forEach(field => {
    const firstLetter = field.name.split('')[0]

    if (!formProps[field.name]) {
      const an = vowels.includes(firstLetter) ? 'an' : 'a'
      errors[field.name] = `Please enter ${an} ${field.label.toLowerCase()}`
    }
  })

  // Password and confirmation must match
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!'
  }

  if (formProps.email && !formProps.email.includes('@')) {
    errors.email = 'Must be in email format'
  }

  // Password length must be 6 or more characters in length
  if (formProps.password && formProps.password.length < 6) {
    errors.password = 'Password must be 6 characters in length'
  }

  return errors
}
const form = reduxForm({
  form: 'register',
  validate: validate
})(RegForm)
export const RegisterForm = connect(mapSignup, mapDispatch)(form)
