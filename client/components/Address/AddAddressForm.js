import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postAddress} from '../../reducers/store'
import {Button, Input, List, Container, Form, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'

const FIELDS = [
  {label: 'First Name', name: 'fistName'},
  {label: 'Last Name', name: 'lastName'},
  {label: 'Street', name: 'addressOne'},
  {label: 'Apt, Suite, Other', name: 'addressTwo'},
  {label: 'City', name: 'city'},
  {label: 'State', name: 'state'},
  {label: 'Zip Code', name: 'zip'}
]

class NewAddressForm extends Component {
  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const initData = {
      firstName: this.props.user.firstName
      // lastName: this.props.user.lastName
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
    console.log('%%%%%%%%%', this.props.user)
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
                    // value={address[field.name.value]}
                  />
                )
              })}
              <div>
                <Button type="submit">Add Address</Button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
          </Container>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHandleSubmit(formProps) {
      dispatch(postAddress(formProps))
    }
  }
}
function validate(formProps) {
  const errors = {},
    vowels = ['a', 'e', 'i', 'o'],
    invalidChar = ['!' || '@' || '#' || '$' || '%' || '^' || '*']

  // Required fields
  FIELDS.forEach(field => {
    const firstLetter = field.name.split('')[0]

    if (!formProps[field.name]) {
      const an = vowels.includes(firstLetter) ? 'an' : 'a'
      errors[field.name] = `Please enter ${an} ${field.label.toLowerCase()}`
    }
  })

  // Address field must only contain valid characters
  if (formProps.addressOne && formProps.addressOne.includes(invalidChar)) {
    errors.addressOne = 'Must only contain valid characters, a-z, 1-9'
  }

  if (formProps.addressTwo && formProps.addressTwo.includes(invalidChar)) {
    errors.addressTwo = 'Must only contain valid characters, a-z, 1-9'
  }
  if (formProps.city && formProps.city.includes(invalidChar)) {
    errors.addressTwo = 'Must only contain valid characters, a-z, 1-9'
  }
  return errors
}
const form = reduxForm({
  form: 'addAddress',
  validate: validate
})(NewAddressForm)

export const AddAddressForm = connect(null, mapDispatchToProps)(form)
