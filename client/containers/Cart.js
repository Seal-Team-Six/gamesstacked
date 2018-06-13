import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItems from '../components/Cart/CartItems/CartItems'
import TableCart from '../components/Cart/TableCart'
import CartSideBar from '../components/Cart/CartSideBar'
import {toggleModal} from '../reducers/modalReducer'

import {Button, Container, Grid} from 'semantic-ui-react'

class Cart extends React.Component {
  componentDidMount() {
    const {showModal} = this.props

    if (showModal) {
      this.props.toggleModal()
    }
  }

  renderCartItems() {
    const {cartItems, totalPrice} = this.props

    if (!cartItems.length) {
      return (
        <div className="no-items">
          <h3>You have no items in your shopping cart!</h3>
          <Link to="/">
            <Button primary>Continue Shopping</Button>
          </Link>
        </div>
      )
    } else {
      return (
        <Grid>
          <Grid.Column width={12}>
            <TableCart>
              <CartItems cartItems={cartItems} />
            </TableCart>
          </Grid.Column>
          <Grid.Column width={4}>
            <CartSideBar
              cartItems={cartItems}
              totalPrice={totalPrice}
              path="/checkout"
              title="Proceed to Checkout"
            />
          </Grid.Column>
        </Grid>
      )
    }
  }

  itemCount() {
    const {cartItems} = this.props

    if (cartItems.length) {
      return <span>({cartItems.length})</span>
    }
  }

  render() {
    return (
      <Container>
        <div className="cart">
          <h2>Shopping Cart {this.itemCount()}</h2>
          <div className="cart-items">{this.renderCartItems()}</div>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {cartItems, totalPrice} = state.cart
  const {products} = state.products
  const {showModal} = state.modal

  return {
    cartItems,
    products,
    totalPrice,
    showModal
  }
}

export default connect(mapStateToProps, {toggleModal})(Cart)
