import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchOrders, requestOrders} from '../../reducers/orderReducer'
import {fetchUsers} from '../../reducers/usersReducer'
import Admin from './'
const {Dashboard, Orders, SingleOrder} = Admin

class AdminRoutes extends React.Component {
  componentDidMount() {
    const {fetchOrders, requestOrders, fetchUsers} = this.props

    requestOrders()
    fetchOrders()
    fetchUsers()
  }
  render() {
    const {path} = this.props.match

    // if (this.props.isLoading) {
    //   return <div>Loading Orders</div>
    // }

    return (
      <Switch>
        <Route exact path={`${path}`} component={Dashboard} />
        <Route exact path={`${path}/orders`} component={Orders} />
        <Route path={`${path}/orders/:id`} component={SingleOrder} />
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  const {admin} = state.user
  const {isLoading} = state.orders

  return {
    user: state.user,
    admin,
    isLoading
  }
}

export default connect(mapStateToProps, {
  fetchOrders,
  requestOrders,
  fetchUsers
})(AdminRoutes)
