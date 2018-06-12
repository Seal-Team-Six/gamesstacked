import React from 'react'
import {connect} from 'react-redux'
import {Card, Button, Table, Image, Icon} from 'semantic-ui-react'

import {deleteItem, addQuantity} from '../../../reducers/cartReducer'

class CartItem extends React.Component {
  onInputChange(id, value) {
    const {addQuantity} = this.props

    if (parseInt(value) >= 1) {
      addQuantity(id, value)
    }
  }

  render() {
    const {cartItem: {product, id, quantity}, deleteItem, user} = this.props

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
            onChange={e => this.onInputChange(id, e.target.value)}
            value={quantity}
          />
        </Table.Cell>
        <Table.Cell>
          <Icon onClick={() => deleteItem(id, user.id)} link name="delete" />
        </Table.Cell>
        <Table.Cell textAlign="right">${product.price}</Table.Cell>
      </Table.Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {
  deleteItem,
  addQuantity
})(CartItem)
