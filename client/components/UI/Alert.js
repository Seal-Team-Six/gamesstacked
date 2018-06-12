import React from 'react'

import {Message} from 'semantic-ui-react'

class Alert extends React.Component {
  render() {
    return (
      <Message negative className="open">
        <Message.Header>Unauthorized</Message.Header>
        <p>You are not allowed to view this page!</p>
      </Message>
    )
  }
}

export default Alert
