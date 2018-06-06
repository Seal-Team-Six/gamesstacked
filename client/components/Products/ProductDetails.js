import React from 'react'
import { connect } from 'react-redux'
import {Grid, Image, Button} from 'semantic-ui-react'

import { addToCart } from '../../reducers/cartReducer'

const ProductDetails = (props) => {
	const { 
		cartId, 
		addToCart, 
		match: { params } 
	} = props;

  return (
    <div>
      <Grid.Column key={1}>
        <Image src='https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg'/>
        <Button primary onClick={() => addToCart(params.id, cartId)}>Add To Cart</Button>
      </Grid.Column>
    </div>
  )

}

function mapStateToProps (state) {
	const { cartId } = state.cart;

	return {
		cartId
	}
}

export default connect(mapStateToProps, { addToCart })(ProductDetails)
