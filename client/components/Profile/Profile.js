import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Profile = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}. This is your profile Page Yo</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Profile)

