import React from 'react'
import {connect} from 'react-redux'
import Addresses from './Address/Addresses'

class CheckoutContainer extends React.Component {
  componentDidMount() {
    // TODO: WRITE THUNK FOR ADDRESS AND CREDIT HERE
  }

  render() {
    const {match} = this.props
    return (
      <div>
        <Addresses />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {state}
}

// TODO: WRITE DISPATCH HERE

export default connect(mapStateToProps)(CheckoutContainer)
