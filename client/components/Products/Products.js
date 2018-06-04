import React from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';

class Products extends React.Component {
	render () {
		const { products } = this.props;

		return (
			<div>
				<ProductsList products={products} />
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