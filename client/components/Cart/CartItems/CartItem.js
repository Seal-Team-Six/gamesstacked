import React from 'react'
import {connect} from 'react-redux'
import {Card, Button, Table, Image, Icon} from 'semantic-ui-react'

import {deleteItem, addQuantity} from '../../../reducers/cartReducer'

class CartItem extends React.Component {
  render() {
    const {
      cartItem: {product, id, quantity},
      deleteItem,
      addQuantity
    } = this.props

    return (
      <Table.Row>
        <Table.Cell>
          <Image
            verticalAlign="middle"
            size="tiny"
            src={`http://${product.cover.url}`}
          />
        </Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>
          <input
            type="number"
            name="quantity"
            onChange={e => addQuantity(id, e.target.value)}
            value={quantity}
          />
        </Table.Cell>
        <Table.Cell>
          <Icon onClick={() => deleteItem(id)} link name="delete" />
        </Table.Cell>
        <Table.Cell textAlign="right">${product.price}</Table.Cell>
      </Table.Row>
    )
  }
}

export default connect(null, {
  deleteItem,
  addQuantity
})(CartItem)
