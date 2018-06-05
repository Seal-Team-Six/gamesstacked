import React from 'react';
import {connect} from 'react-redux';
import ProductsList from './ProductsList';

class Products extends React.Component {
		render() {
				const {products} = this.props;
				console.log('products', products)
				return (<ProductsList products={products}/>)
		}
}

function mapStateToProps(state) {
		const {products} = state.products;

		return {products}
}

export default connect(mapStateToProps)(Products);