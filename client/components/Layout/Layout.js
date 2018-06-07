import React from 'react'
import {Container} from 'semantic-ui-react'

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout
