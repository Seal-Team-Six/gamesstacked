import React, {Component} from 'react'
import {List, Table} from 'semantic-ui-react'
import CartItem from './CartItem'

class CartItems extends React.Component {
  render() {
    const {cartItems} = this.props

    return (
      <Table.Body>
        {cartItems.map((cartItem, index) => {
          return (
            <CartItem key={cartItem.id} cartItem={cartItem} index={index} />
          )
        })}
      </Table.Body>
    )
  }
}

export default CartItems
