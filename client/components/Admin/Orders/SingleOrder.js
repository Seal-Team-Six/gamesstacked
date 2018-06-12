import React from 'react'
import {connect} from 'react-redux'

import FetchOrder from '../../../hoc/fetchOrder'

class SingleOrder extends React.Component {
  render() {
    const {selectedOrder} = this.props

    return <div>{selectedOrder.id}</div>
  }
}

function mapStateToProps(state, ownProps) {
  const {selectedOrder} = state.orders

  return {
    selectedOrder
  }
}

export default connect(mapStateToProps)(FetchOrder(SingleOrder))
