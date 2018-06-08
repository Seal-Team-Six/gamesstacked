import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Divider, Button, List} from 'semantic-ui-react'

class CartSideBar extends React.Component {
  render() {
    const {cartItems, totalPrice, path, title} = this.props

    return (
      <Card>
        <Card.Content>
          <Card.Header>Order Summary</Card.Header>
          <List divided verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                ${totalPrice.toFixed(2)}
              </List.Content>
              <List.Content>Subtotal ({cartItems.length})</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">Free</List.Content>
              <List.Content>Shipping</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                ${totalPrice.toFixed(2)}
              </List.Content>
              <List.Content>Order Total</List.Content>
            </List.Item>
          </List>
          <Card.Description textAlign="center">
            <Link to={path}>
              <Button fluid primary>
                {title}
              </Button>
            </Link>
            <Divider horizontal>or</Divider>
            <Link to="/login">Sign in</Link> for more perks.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default CartSideBar
