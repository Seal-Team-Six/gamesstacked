import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class SocialButton extends React.Component {
	render () {
		const { name, displayName, href } = this.props;

		return (
			<a href={href}>
				<Button color={name}>
	        <Icon name={name} /> {displayName} with Google
	      </Button>
	    </a>
		)
	}
}

export default SocialButton;