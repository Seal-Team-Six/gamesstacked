import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
import {auth, notGoogleRegister} from '../../reducers/store'
import {Icon, Button, Input, List, Container, Form} from 'semantic-ui-react'
import SocialButton from '../UI/SocialButton'
// import Signup from '../auth-form'
import {Field, reduxForm} from 'redux-form'

/**
 * COMPONENT
 */

const FIELDS = [
  {label: 'First Name', name: 'firstName'},
  {label: 'Last Name', name: 'lastName'},
  {label: 'Email', name: 'email'},
  {label: 'Password', name: 'password'},
  {label: 'Password Confirmation', name: 'passwordConfirm'}
]

class RegForm extends Component {
  renderField(field) {
    const {label, type, input, meta: {error, touched}} = field
    return (
      <Form.Group>
        <Input type={type} placeholder={label} {...input} />
      </Form.Group>
    )
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props

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
                    type="text"
                    component={this.renderField}
                    label={field.label}
                    name={field.name}
                  />
                )
              })}
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
          </Container>
        </div>
        <div>{/* <Signup /> */}</div>
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
function validate() {}
const form = reduxForm({
  form: 'register',
  validate: validate
})(RegForm)
export const RegisterForm = connect(mapSignup, mapDispatch)(form)

/**
 * PROP TYPES
 */
// RegisterForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };
