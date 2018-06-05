import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import CartItem from './CartItem';

class CartItems extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <List divided verticalAlign="middle">
        { 
        	cartItems.map(cartItem => {
        		return (
        			<CartItem 
        				key={cartItem.id} 
        				cartItem={cartItem} 
        			/>
        		)
        	}) 
      	}
      </List>
    );
  }
}

export default CartItems;
