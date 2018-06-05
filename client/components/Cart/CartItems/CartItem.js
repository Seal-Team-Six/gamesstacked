import React from 'react';
import { Card, Button, List } from 'semantic-ui-react';


class CartItem extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(cartItem);
    return (
      <List.Item>
        <List.Content floated="right">
          <Button>Remove</Button>
        </List.Content>
        <Image avatar src="/assets/images/avatar/small/lena.png" />
        <List.Content>{cartItem.name}</List.Content>
      </List.Item>
    );
  }
}

export default CartItem;
