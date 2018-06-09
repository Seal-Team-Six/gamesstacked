import React from 'react'
import {connect} from 'react-redux'

class CheckoutContainer extends React.Component {
  componentDidMount() {
    // TODO: WRITE THUNK FOR ADDRESS AND CREDIT HERE
  }

  render() {
    const {match} = this.props
    return (
      <div>
        {match.path.path === '/checkout/address'
        // TODO: ? RENDER ADDRESS :
        // RENDER CREDITCARD
        }
        <div> + ADD CARD/ADDRESS </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

// TODO: WRITE DISPATCH HERE

export default connect(mapStateToProps)(CheckoutContainer)
