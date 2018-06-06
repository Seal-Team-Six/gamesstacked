import React, {Component} from 'react'
import {Grid, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchProduct, resetProduct} from '../../reducers/productsReducer';

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
    console.log('product details', this.props.selectedProduct)
    if (!this.props.selectedProduct.id) {
      return (
        <div>..loading</div>
      )
    }
    return (
      <div>

        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              < Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg"/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              < Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg"/>
            </Grid.Column>
            <Grid.Column width={10}>
              < Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg"/>
            </Grid.Column>
            <Grid.Column width={3}>
              < Image src="https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {selectedProduct: state.products.selectedProduct}
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: (id) => {
      dispatch(fetchProduct(id))
    },
    removeProduct: () => {
      dispatch(resetProduct())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
