import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

import {addToCart, addQuantity} from '../../reducers/cartReducer'

class AddToCart extends React.Component {
  addOrEdit(id, cartId, userId) {
    const {
      cartItems,
      isCartLoading,
      selectedProduct,
      addQuantity,
      addToCart
    } = this.props

    if (isCartLoading) {
      return
    }

    const cartItem = cartItems.find(
      item => item.productId === selectedProduct.id
    )

    if (cartItem) {
      addQuantity(cartItem.id, cartItem.quantity + 1)
    } else {
      addToCart(id, cartId, userId)
    }
  }

  render() {
    const {cartId, user, match: {params}} = this.props
    // console.log('[ADD TO CART]:', this.props)
    return (
      <Button
        className="product-cover-button"
        primary
        onClick={() => this.addOrEdit(params.id, cartId, user.id)}
        fluid
        positive
      >
        Add to Cart
      </Button>
    )
  }
}

const mapStateToProps = state => {
  const {cartId, cartItems, isLoading} = state.cart
  const {selectedProduct} = state.products

  return {
    selectedProduct,
    cartId,
    user: state.user,
    cartItems,
    isCartLoading: isLoading
  }
}

export default connect(mapStateToProps, {
  addToCart,
  addQuantity
})(AddToCart)
