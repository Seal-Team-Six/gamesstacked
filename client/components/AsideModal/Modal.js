import React from 'react'
import {connect} from 'react-redux'

import Backdrop from './Backdrop'

const AsideModal = props => {
  const {back, showModal, children} = props
  const classes = showModal ? 'open' : 'close'

  return (
    <div>
      <Backdrop back={back} showModal={showModal} />
      <div className={`aside-modal ${classes}`}>
        <div onClick={back} className="cancel-form">
          <button type="button" className="md-btn md-fab mb-2 white">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state)
  const {showModal} = state.modal

  return {showModal}
}

export default connect(mapStateToProps)(AsideModal)
