import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, List, Image } from 'semantic-ui-react';


class CartItem extends React.Component {
  render() {
    const { cartItem, product } = this.props;

    return (
      <List.Item>
        <List.Content floated="right">
          <List.Content>${product.price}</List.Content>
        </List.Content>
        <Image avatar src={`http://${product.cover.url}`} />
        <List.Content>{product.name}</List.Content>
      </List.Item>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const { products } = state.products;

  return {
    product: products.find(product => {
      return product.id === ownProps.cartItem.productId
    })
  }
}

export default connect(mapStateToProps)(CartItem);
