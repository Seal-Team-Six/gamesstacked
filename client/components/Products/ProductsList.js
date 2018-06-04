import React from 'react';
import Product from './Product';

class ProductsList extends React.Component {
	render () {
		const { products } = this.props;

		return (
			<div>
				{
					products.map(product => {
						return (
							<Product 
								key={product.id}
								product={product}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default ProductsList;