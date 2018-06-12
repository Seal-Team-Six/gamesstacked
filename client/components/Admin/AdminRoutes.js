import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

class AdminRoutes extends React.Component {
  render() {
    const {path} = this.props.match

    return (
      // <Switch>
      // 	<Route path={`${path}`} exact component={Campuses} />
      // </Switch>

      <div>Admin</div>
    )
  }
}

function mapStateToProps(state) {
  const {admin} = state.user

  return {
    user: state.user,
    admin
  }
}

export default connect(mapStateToProps)(AdminRoutes)
