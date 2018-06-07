import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image, Container} from 'semantic-ui-react'

const Product = props => {
  const {product} = props

  return (
    <Link to={`/product/${product.id}`}>
      <Card>
        <Image src={product.cover && `http://${product.cover.url}`} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.price}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {Math.floor(product.totalRating) !== 0
            ? 'Rating: ' + Math.floor(product.totalRating)
            : 'No rating for this game.'}
        </Card.Content>
      </Card>
    </Link>
  )
}

export default Product
