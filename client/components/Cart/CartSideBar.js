import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Checkbox, Divider, Button } from 'semantic-ui-react';

class CartSideBar extends React.Component {
  // NOTE: NEED TO HOOK UP THIS COMPONENT TO SHOPPING CART
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Subitem (Numba item): ManyBucks</Card.Header>
          <Checkbox label="This order contains a gift" />
          <Card.Description textAlign="center">
          <Button fluid color="yellow">Proceed to Checkout</Button>
          <Divider horizontal>or</Divider>
          <Link to="/login">Sign in</Link> for more perks.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default CartSideBar
