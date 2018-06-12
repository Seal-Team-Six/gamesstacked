import React from 'react'
import {connect} from 'react-redux'
import AsideModal from '../AsideModal'
import CartSideBar from './CartSideBar'
import {Card} from 'semantic-ui-react'

import {toggleModal} from '../../reducers/modalReducer'

class CartModal extends React.Component {
  handleBack = () => {
    this.props.toggleModal()
  }

  render() {
    const {cartItems, totalPrice} = this.props

    return (
      <AsideModal back={this.handleBack}>
        <h1>Your Cart</h1>
        {cartItems.map(item => {
          return (
            <Card key={item.id}>
              <Card.Content>
                <Card.Header>{item.product.name}</Card.Header>
                <Card.Meta>Quantity: {item.quantity}</Card.Meta>
                <Card.Description>${item.product.price}</Card.Description>
              </Card.Content>
            </Card>
          )
        })}
        <CartSideBar
          cartItems={cartItems}
          totalPrice={totalPrice}
          path="/cart"
          title="View Cart"
        />
      </AsideModal>
    )
  }
}

function mapStateToProps(state) {
  const {cartItems, totalPrice} = state.cart

  return {
    cartItems,
    totalPrice
  }
}

export default connect(mapStateToProps, {toggleModal})(CartModal)
