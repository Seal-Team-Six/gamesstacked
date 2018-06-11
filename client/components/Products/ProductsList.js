import React from 'react'
import Product from './Product'
import {Grid, Container} from 'semantic-ui-react'

class ProductsList extends React.Component {
  render() {
    const {products} = this.props

    return (
      <div>
        <Container>
          <Grid columns={4}>
            {products.map(product => {
              return (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={4}
                  key={product.id}
                >
                  <Product product={product} />
                </Grid.Column>
              )
            })}
          </Grid>
        </Container>
      </div>
    )
  }
}

export default ProductsList
