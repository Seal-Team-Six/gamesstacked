import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, Table, Image } from 'semantic-ui-react';

import { deleteItem } from '../../../reducers/cartReducer';


class CartItem extends React.Component {
  render() {
    const { product } = this.props.cartItem;

    return (
      <Table.Row>
        <Table.Cell>
          <Image verticalAlign='middle' size='tiny' src={`http://${product.cover.url}`} />
        </Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>
          <div onClick={() => this.props.deleteItem(this.props.cartItem.id)}>Delete</div>
        </Table.Cell>
        <Table.Cell textAlign='right'>${ product.price }</Table.Cell>
      </Table.Row>
    );
  }
}

export default connect(null, { deleteItem })(CartItem);
