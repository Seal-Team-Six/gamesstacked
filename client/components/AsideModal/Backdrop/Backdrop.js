import React from 'react'
import {connect} from 'react-redux'
import {toggleModal} from '../../../reducers/modalReducer'

class Backdrop extends React.Component {
  render() {
    console.log(this.props)

    return this.props.showModal ? (
      <div onClick={this.props.back} className="backdrop" />
    ) : null
  }
}

export default connect(null, {toggleModal})(Backdrop)
