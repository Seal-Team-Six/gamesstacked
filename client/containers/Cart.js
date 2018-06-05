import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/Cart/CartItems/CartItems';

class Cart extends React.Component {
	render () {
		const { cartItems } = this.props;

		return (
			<div>
				Cart
				<CartItems 
					cartItems={cartItems} 
				/>
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { cartItems } = state.cart;

	return {
		cartItems
	}
}

export default connect(mapStateToProps)(Cart);