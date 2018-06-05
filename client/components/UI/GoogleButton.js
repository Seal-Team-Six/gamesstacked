import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class GoogleButton extends React.Component {
	render () {
		return (
			<Button color='google plus'>
        <Icon name='google plus' /> {this.props.displayName} with Google
      </Button>
		)
	}
}

export default GoogleButton;