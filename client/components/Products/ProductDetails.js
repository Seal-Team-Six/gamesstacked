import React, {Component} from 'react'
import {Grid, Container, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchProduct, resetProduct} from '../../reducers/productsReducer';

import {addToCart} from '../../reducers/cartReducer'

class ProductDetails extends Component {

  componentDidMount() {
    this
      .props
      .getProduct(this.props.match.params.id)
  }

  componentWillUnmount() {
    this
      .props
      .removeProduct()
  }

  render() {
    const {cartId, addToCart, match: {
        params
      }} = this.props;

    const {selectedProduct} = this.props
    console.log('!!!', selectedProduct)
    if (!this.props.selectedProduct.id) {
      return (
        <div>..loading</div>
      )
    }

    return (
      <div>
        <Grid.Column className="product-hero" key={16}>
          <Image
            src={selectedProduct.screenshots
            ? `http://${selectedProduct.screenshots[Math.floor(Math.random() * ((selectedProduct.screenshots.length - 1) - 0 + 1))].url}`
            : `http://${selectedProduct.cover.url}`}/>
        </Grid.Column>
        <Container>
          <Grid.Row>
            <Grid.Column className="product-cover" width={6}>
              <Image src={`http://${selectedProduct.cover.url}`}/>
              <Button
                className="product-cover-button"
                primary
                onClick={() => addToCart(params.id, cartId)}
                fluid
                positive>Add To Cart
              </Button>
            </Grid.Column>
            <Grid.Column className="product-content" width={8}>
              <h1>{selectedProduct.name}</h1>
              <p>{selectedProduct.summary}</p>
            </Grid.Column>
          </Grid.Row>
        </Container>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const {cartId} = state.cart;
  const {selectedProduct} = state.products;

  return {selectedProduct, cartId}
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: (id) => {
      dispatch(fetchProduct(id))
    },
    removeProduct: () => {
      dispatch(resetProduct())
    },
    addToCart: () => {
      dispatch(addToCart())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
