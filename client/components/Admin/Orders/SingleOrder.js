import React from 'react'
import {connect} from 'react-redux'
import {Container, Table, Card} from 'semantic-ui-react'

import FetchOrder from '../../../hoc/fetchOrder'

class SingleOrder extends React.Component {
  render() {
    const {selectedOrder, orderItems, user, addresses} = this.props

    if (!selectedOrder.id && !this.props.user) {
      return <div>Loading</div>
    }

    const address = addresses.find(
      address => address.userId === selectedOrder.user.id
    )

    return (
      <Container>
        <h1>Order ID: {selectedOrder.id}</h1>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedOrder.user.firstName} {selectedOrder.user.lastName}
            </Card.Header>
            <Card.Meta>Address</Card.Meta>
            <Card.Description>{address.addressOne}</Card.Description>
            <Card.Description>
              {address.city}, {address.state} {address.zip}
            </Card.Description>
            <Card.Description>
              Total: ${selectedOrder.subTotal}
            </Card.Description>
          </Card.Content>
        </Card>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order Item ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orderItems.map(item => {
              return (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.product.name}</Table.Cell>
                  <Table.Cell>${item.product.price}</Table.Cell>
                  <Table.Cell>{selectedOrder.orderStatus}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {selectedOrder} = state.orders
  const {collection} = state.users
  const {addresses} = state.addresses
  console.log(addresses)
  return {
    selectedOrder,
    orderItems: selectedOrder.orderItems,
    collection,
    // user: collection.find(user => user.id === selectedOrder.userId)
    addresses
  }
}

export default connect(mapStateToProps)(FetchOrder(SingleOrder))
