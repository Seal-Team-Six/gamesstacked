import React, {Component} from 'react'
import {
  Grid,
  Container,
  Image,
  Button,
  Statistic,
  Embed
} from 'semantic-ui-react'
import Gallery from 'react-grid-gallery'
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
      }} = this.props

    const {selectedProduct} = this.props

    const images = selectedProduct.screenshots && selectedProduct
      .screenshots
      .map(screenshot => {
        return ({
          id: `${screenshot.id}`,
          src: `http://${screenshot.url}`,
          thumbnail: `http://${screenshot.url}`,
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          isSelected: false
        })
      })

    const ratings = (score) => {
      if (score > 75) {
        return 'green'
      } else if (score > 50 && score < 74) {
        return 'orange'
      } else {
        return 'red'
      }
    }

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
          <Grid className="product-content" columns="three" divided>
            <Grid.Row>
              <Grid.Column computer={4}>
                <Image className="product-cover" src={`http://${selectedProduct.cover.url}`}/>
                <Button
                  className="product-cover-button"
                  primary
                  onClick={() => addToCart(params.id, cartId)}
                  fluid
                  positive>Add To Cart
                </Button>
              </Grid.Column>
              <Grid.Column computer={8}>
                <h1>{selectedProduct.name}</h1>
                {selectedProduct.summary
                  ? <p>{selectedProduct.summary}</p>
                  : <p>There is no summary for this game</p>}

              </Grid.Column>
              <Grid.Column className="rating" computer={4} textAlign="center">
                <Statistic color={ratings(selectedProduct.totalRating)}>
                  <Statistic.Value>
                    {Math.floor(selectedProduct.totalRating) !== 0
                      ? Math.floor(selectedProduct.totalRating)
                      : 'No rating for this game.'
}
                  </Statistic.Value>
                  <Statistic.Label>User Rating
                  </Statistic.Label>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid.Column key={16}>
            {selectedProduct && selectedProduct.videos
              ? <div>
                  <h4>Videos:</h4>
                  <Embed
                    id={selectedProduct.videos[0].video_id}
                    placeholder={`http://${selectedProduct.cover.url}`}
                    source='youtube'/>
                </div>

              : null}

            {selectedProduct.screenshots && selectedProduct.screenshots.length
              ? <div>
                  <h4>Screenshots:</h4>
                  <Gallery
                    images={images}
                    key={selectedProduct.id}
                    backdropClosesModal={true}
                    preloadNextImage={true}/>
                </div>
              : null}
          </Grid.Column>
        </Container>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const {cartId} = state.cart;
  const {selectedProduct} = state.products

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
