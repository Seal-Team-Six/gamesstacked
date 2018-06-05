import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import CartItem from './CartItem';
class CartItems extends React.Component {
  render() {
    const { CartItems } = this.props;

    return (
      <List divided verticalAlign="middle">
        {CartItems.map(cartItem => <CartItem />)}
      </List>
    );
  }
}

export default CartItemsList;
