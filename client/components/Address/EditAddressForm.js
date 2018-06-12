import React, {Component} from 'react'
import {connect} from 'react-redux'
import {putAddress, closeModal} from '../../reducers/addressReducer'
import {Button, Input, Container, Form} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'

const FIELDS = [
  {
    label: 'First Name',
    name: 'firstName',
    required: true
  },
  {
    label: 'Last Name',
    name: 'lastName',
    required: true
  },
  {
    label: 'Street',
    name: 'addressOne',
    required: true
  },
  {
    label: 'Apt, Suite, Other',
    name: 'addressTwo',
    required: false
  },
  {
    label: 'City',
    name: 'city',
    required: true
  },
  {
    label: 'State',
    name: 'state',
    required: true
  },
  {
    label: 'Zip Code',
    name: 'zip',
    required: true
  }
]

class EditForm extends Component {
  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const initData = {
      firstName: this.props.userAddress[0].firstName,
      lastName: this.props.userAddress[0].lastName,
      addressOne: this.props.userAddress[0].addressOne,
      addressTwo: this.props.userAddress[0].addressTwo,
      city: this.props.userAddress[0].city,
      state: this.props.userAddress[0].state,
      zip: this.props.userAddress[0].zip
      // userId: this.props.user.id
    }
    this.props.initialize(initData)
  }

  renderField(field) {
    const {label, type, input, meta: {error, touched}} = field

    return (
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          type={type}
          placeholder={label}
          {...input}
        />
        <div className="error">{touched ? error : ''}</div>
      </Form.Group>
    )
  }

  render() {
    const {name, handleSubmit, error, userAddress} = this.props
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
                    value={userAddress[0].firstName}
                  />
                )
              })}
              <div>
                <Button positive type="submit">
                  Add Address
                </Button>
              </div>
              {error && error.response && <div>{error.response.data}</div>}
            </Form>
          </Container>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleSubmit: formProps => {
      const id = ownProps.userAddress[0].id
      dispatch(putAddress(id, formProps))
      dispatch(closeModal())
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

    if (!formProps[field.name] && field.required) {
      const an = vowels.includes(firstLetter) ? 'an' : 'a'
      errors[field.name] = `Please enter ${an} ${field.label.toLowerCase()}`
    }
  })

  // Address field must only contain valid characters
  if (formProps.addressOne && formProps.addressOne.includes(invalidChar)) {
    errors.addressOne = 'Must only contain valid characters, a-z, 1-9'
  }

  // if (formProps.addressTwo && formProps.addressTwo.includes(invalidChar)) {
  // errors.addressTwo = 'Must only contain valid characters, a-z, 1-9' } if
  // (formProps.city && formProps.city.includes(invalidChar)) { errors.addressTwo
  // = 'Must only contain valid characters, a-z, 1-9' }
  return errors
}
const form = reduxForm({form: 'addAddress', validate: validate})(EditForm)

export const EditAddressForm = connect(null, mapDispatchToProps)(form)
