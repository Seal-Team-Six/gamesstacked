import React from 'react'
import {connect} from 'react-redux'
import Addresses from './Address/Addresses'

class CheckoutContainer extends React.Component {
  render() {
    return (
      <div>
        <Addresses ownProps={this.props.ownProps} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {state, ownProps}
}
export default connect(mapStateToProps)(CheckoutContainer)
