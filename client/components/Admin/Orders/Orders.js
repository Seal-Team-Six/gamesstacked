import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Container, Table} from 'semantic-ui-react'

class Orders extends React.Component {
  render() {
    const {orders} = this.props

    return (
      <Container>
        <h1>Orders</h1>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order ID</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Items</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell textAlign="right">View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders.map(order => {
              return (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.id}</Table.Cell>
                  <Table.Cell>${order.subTotal}</Table.Cell>
                  <Table.Cell>{order.orderItems.length}</Table.Cell>
                  <Table.Cell>{order.orderStatus}</Table.Cell>
                  <Table.Cell textAlign="right">
                    <Link to={`/admin/orders/${order.id}`}>Show</Link>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {collection} = state.orders

  return {
    orders: collection
  }
}

export default connect(mapStateToProps)(Orders)
