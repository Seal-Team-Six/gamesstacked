import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, Table, Image, Icon } from 'semantic-ui-react';

import { deleteItem } from '../../../reducers/cartReducer';


class CartItem extends React.Component {
  render() {
    const { 
      cartItem: { product, id },
      deleteItem,
    } = this.props;

    return (
      <Table.Row>
        <Table.Cell>
          <Image verticalAlign='middle' size='tiny' src={`http://${product.cover.url}`} />
        </Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>
          <input type='number' />
        </Table.Cell>
        <Table.Cell>
          <Icon onClick={() => deleteItem(id)} link name='delete' />
        </Table.Cell>
        <Table.Cell textAlign='right'>${ product.price }</Table.Cell>
      </Table.Row>
    );
  }
}

export default connect(null, { deleteItem })(CartItem);
