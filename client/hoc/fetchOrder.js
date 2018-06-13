import React from 'react'
import {connect} from 'react-redux'

import {requestOrders, fetchOrder, resetOrder} from '../reducers/orderReducer'

export default function(ComposedComponent) {
  class FetchOrder extends React.Component {
    componentDidMount() {
      const {fetchOrder, match: {params}} = this.props

      requestOrders()
      fetchOrder(params.id)
    }

    componentWillUnmount() {
      this.props.resetOrder()
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    const {isLoading} = state.orders

    return {
      isLoading
    }
  }

  return connect(mapStateToProps, {
    requestOrders,
    fetchOrder,
    resetOrder
  })(FetchOrder)
}
