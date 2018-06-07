import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../../reducers/store'
import {Icon, Button} from 'semantic-ui-react'
import SocialButton from '../UI/SocialButton'

/**
 * COMPONENT
 */
const RegForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return <div>This is reg form</div>
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

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
    }
  }
}

export const Test = connect(null, null)(RegForm)
