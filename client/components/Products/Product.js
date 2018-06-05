import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import AddToCart from '../UI/AddToCart';

class Product extends React.Component {
	extra () {
		return <AddToCart />
	}

	render () {
		const { product } = this.props;

		return (
			<Card
		    image='/assets/images/avatar/large/elliot.jpg'
		    header={product.name}
		    meta='Friend'
		    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
		    extra={this.extra()}
		  />
		)
	}
}

export default Product;