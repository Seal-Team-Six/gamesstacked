import React from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent) {
  class AdminAuthentication extends React.Component {
    componentWillMount() {
      if (!this.props.admin) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.admin) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    const {admin} = state.user

    return {
      admin
    }
  }

  return connect(mapStateToProps)(AdminAuthentication)
}
