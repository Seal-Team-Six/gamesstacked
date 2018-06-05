import React from 'react';
import {Card, Button} from 'semantic-ui-react';

import AddToCart from '../UI/AddToCart';

class Product extends React.Component {
		extra() {
				return <AddToCart/>
		}

		render() {
				const {product} = this.props;

				return (<Card
						image={product.images[0]}
						header={product.name}
						meta={`$${product.price}`}
						extra={this.extra()}/>)
		}
}

export default Product;