import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import AddToCart from '../UI/AddToCart';

class Product extends React.Component {
	extra () {
		return <AddToCart />
	}

	render () {
		const { product } = this.props;
		console.log(product)
		return (
			<Card
		    image={product.cover.url}
		    header={product.name}
		    meta='Friend'
		    extra={this.extra()}
		  />
		)
	}
}

export default Product;