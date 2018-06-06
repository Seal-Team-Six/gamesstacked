import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/Cart/CartItems/CartItems';

import { Button } from 'semantic-ui-react';

class Cart extends React.Component {
	renderCartItems () {
		const { cartItems } = this.props;

		if (!cartItems.length) {
			return (
				<div className="no-items">
					<h3>You have no items in your shopping cart!</h3>
					<Button primary>Continue Shopping</Button>
				</div>
			)
		} else {
			return (
				<CartItems 
					cartItems={cartItems} 
				/>
			)
		}
	}

	itemCount () {
		const { cartItems } = this.props;

		if (cartItems.length) {
			return (
				<span>({ cartItems.length })</span>
			)
		}
	}

	render () {
		const { cartItems } = this.props;

		return (
			<div className="cart">
				<h2>Shopping Cart { this.itemCount() }</h2>
				<div className="cart-items">
					{ this.renderCartItems() }
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { cartItems } = state.cart;
	const { products } = state.products;

	return {
		cartItems,
		products,
	}
}

export default connect(mapStateToProps)(Cart);


























