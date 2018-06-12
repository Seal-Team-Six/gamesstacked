// Higher Order Component

import React from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent) {
  class AdminAuthentication extends React.Component {
    componentWillMount() {
      if (!this.props.user.admin) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.user.admin) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {user: state.user}
  }

  return connect(mapStateToProps)(AdminAuthentication)
}
