import React from 'react'
import {Grid, Image, Button} from 'semantic-ui-react'

const ProductDetails = () => {

  return (
    <div>
      <Grid.Column key={1}>
        <Image src='https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg'/>
        <Button primary>Add To Cart</Button>
      </Grid.Column>
    </div>
  )

}

export default ProductDetails
