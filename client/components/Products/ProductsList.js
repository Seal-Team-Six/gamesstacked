import React from 'react'
import Product from './Product'
import {Grid, Image} from 'semantic-ui-react'

const ProductsList = props => {
  const {products} = props
  return (
    <div>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={12}>
            <Grid container columns={4}>
              {products.map(product => {
                return (
                  <Grid.Column key={product.id}>
                    <Product product={product} />
                  </Grid.Column>
                )
              })}
            </Grid>
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src="/assets/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ProductsList
