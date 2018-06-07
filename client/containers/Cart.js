import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/Cart/CartItems/CartItems';
import TableCart from '../components/Cart/TableCart';

import { Button, Container, Table } from 'semantic-ui-react';

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
				<TableCart>
					<CartItems 
						cartItems={cartItems} 
					/>
				</TableCart>
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
		const { cartItems, totalPrice } = this.props;

		return (
			<Container>
				<div className="cart">
					<h2>Shopping Cart { this.itemCount() }</h2>
					<div className="cart-items">
						{ this.renderCartItems() }
					</div>
					<div className="cart-summary">
						{ totalPrice }
					</div>
				</div>
			</Container>
		)
	}
}

function mapStateToProps (state) {
	const { cartItems, totalPrice } = state.cart;
	const { products } = state.products;

	return {
		cartItems,
		products,
		totalPrice,
	}
}

export default connect(mapStateToProps)(Cart);


























