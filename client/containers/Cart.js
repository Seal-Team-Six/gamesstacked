import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/Cart/CartItems/CartItems';
import TableCart from '../components/Cart/TableCart';
import CartSummary from '../components/Cart/CartSummary';
import CartSideBar from '../components/Cart/CartSideBar';

import { Button, Container, Table, Grid } from 'semantic-ui-react';

class Cart extends React.Component {
	renderCartItems () {
		const { cartItems, totalPrice } = this.props;

		if (!cartItems.length) {
			return (
				<div className="no-items">
					<h3>You have no items in your shopping cart!</h3>
					<Button primary>Continue Shopping</Button>
				</div>
			)
		} else {
			return (
				<Grid>
					<Grid.Column width={12}>
						<TableCart>
							<CartItems 
								cartItems={cartItems} 
							/>
						</TableCart>	
					</Grid.Column>
					<Grid.Column width={4}>
						<CartSideBar 
							cartItems={cartItems} 
							totalPrice={totalPrice}
						/>
					</Grid.Column>
				</Grid>
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


























