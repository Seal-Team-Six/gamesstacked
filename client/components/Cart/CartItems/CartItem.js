import React from 'react'
import {connect} from 'react-redux'
import {Table, Image, Icon} from 'semantic-ui-react'

import {deleteItem, addQuantity} from '../../../reducers/cartReducer'

class CartItem extends React.Component {
  onInputChange(id, value, userId) {
    if (parseInt(value) >= 1) {
      this.props.addQuantity(id, value, userId)
    }
  }

  render() {
    const {cartItem: {product, id, quantity}, user} = this.props

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
            onChange={ev => this.onInputChange(id, ev.target.value, user.id)}
            value={quantity}
          />
        </Table.Cell>
        <Table.Cell>
          <Icon
            onClick={() => this.props.deleteItem(id, user.id)}
            link
            name="delete"
          />
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
