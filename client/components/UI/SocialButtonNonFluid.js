import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

class SocialButton extends React.Component {
  render() {
    const {className, displayName, href, name} = this.props

    return (
      <a href={href}>
        <Button color={className}>
          <Icon name={className} /> {displayName} with {name}
        </Button>
      </a>
    )
  }
}

export default SocialButton
