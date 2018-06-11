import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
import {auth, notGoogleRegister, notGoogleEdit} from '../../reducers/store'
import {Icon, Button, Input, List, Container, Form} from 'semantic-ui-react'
import SocialButton from '../UI/SocialButton'

import {Field, reduxForm, initialize} from 'redux-form'

/**
 * COMPONENT
 */

const FIELDS = [
  {label: 'First Name', name: 'firstName'},
  {label: 'Last Name', name: 'lastName'},
  {label: 'Email', name: 'email'},
  {label: 'Image', name: 'imageUrl'}
  //   {label: 'Password', name: 'password'},
  //   {label: 'Password Confirmation', name: 'passwordConfirm'}
]

class EditForm extends Component {
  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const initData = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      imageUrl: this.props.user.imageUrl
    }
    this.props.initialize(initData)
  }

  renderField(field) {
    const {label, type, input, meta: {error, touched}} = field
    // console.log(field)

    return (
      <Form.Group>
        <Input type={type} placeholder={label} {...input} />
        <div className="error">{touched ? error : ''}</div>
      </Form.Group>
    )
  }

  render() {
    const {name, displayName, handleSubmit, error, user} = this.props
    // console.log('%%%%%%%%%', this.props.user)
    return (
      <div>
        <div>
          <Container>
            <Form
              onSubmit={handleSubmit(this.props.onHandleSubmit.bind(this))}
              name={name}
            >
              {FIELDS.map(field => {
                return (
                  <Field
                    key={field.label}
                    type={field.name.includes('password') ? 'password' : 'text'}
                    component={this.renderField}
                    label={field.label}
                    name={field.name}
                    value={user[field.name.value]}
                  />
                )
              })}
              <div>
                <Button type="submit">Submit Changes</Button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
            <SocialButton
              href="/auth/google"
              displayName={displayName}
              className="google plus"
              name="Google"
            />
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
    // user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHandleSubmit(formProps) {
      dispatch(notGoogleEdit(this.props.user.id, formProps))
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
})(EditForm)
export const EditAccountForm = connect(mapStateToProps, mapDispatchToProps)(
  form
)
