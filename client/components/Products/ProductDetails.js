import React, {Component} from 'react'
import {Grid, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchProduct, resetProduct} from '../../reducers/productsReducer'

import {addToCart} from '../../reducers/cartReducer'

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.removeProduct()
  }

  render() {
    const {cartId, user, addToCart, match: {params}} = this.props

    if (!this.props.selectedProduct.id) {
      return <div>..loading</div>
    }
    return (
      <div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              <Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg" />
              <Button
                primary
                onClick={() => addToCart(params.id, cartId, user.id)}
              >
                Add To Cart
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {cartId} = state.cart
  const {selectedProduct} = state.products

  return {
    selectedProduct,
    cartId,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => {
      dispatch(fetchProduct(id))
    },
    removeProduct: () => {
      dispatch(resetProduct())
    },
    addToCart: (productId, cartId, userId) => {
      dispatch(addToCart(productId, cartId, userId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
