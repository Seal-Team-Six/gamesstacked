import React from 'react';

class Product extends React.Component {
	render () {
		const { product } = this.props;

		return (
			<div>
				{ product.name }
			</div>
		)
	}
}

export default Product;