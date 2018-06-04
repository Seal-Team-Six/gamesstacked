import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends React.Component {
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

function mapStateToProps (state) {
	const { products } = state.products;

	return {
		products,
	}
}

export default connect(mapStateToProps)(Products);