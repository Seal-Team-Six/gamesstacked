import React, {Component} from 'react'
import {connect} from 'react-redux'
import {EditAccountForm} from '../Auth/EditAccountForm'
import {Container, Button, Table} from 'semantic-ui-react'
import {fetchOrders} from '../../reducers/orderReducer'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }
  componentDidMount() {
    this.props.fetchOrders()
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const {user, orders} = this.props
    const theseOrders = orders.filter(
      order => order.userId === parseInt(user.id)
    )

    if (!orders.length) return 'Loading'
    return (
      <Container>
        <div>
          <div className="accountDiv">
            <img className="resizeMed" src={user.imageUrl} />
            <h3>Welcome, {user.firstName}</h3>
            <p>You spent a lot of money last time.</p>
            <p>Please do so again!</p>
          </div>

          <div>
            <Button
              className="formGroup"
              onClick={this.toggleHidden.bind(this)}
            >
              Edit Account Info
            </Button>
            {!this.state.isHidden && <EditAccountForm user={this.props.user} />}
          </div>
        </div>

        <h2>Order History</h2>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order ID</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Items</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {theseOrders.map(order => {
              return (
                <Table.Row key={order.id}>
                  <Table.Cell>{order.id}</Table.Cell>
                  <Table.Cell>${(order.subTotal / 100).toFixed(2)}</Table.Cell>
                  <Table.Cell>
                    {order.orderItems.reduce(
                      (acc, curr) => acc + curr.quantity,
                      0
                    )}
                  </Table.Cell>
                  <Table.Cell>{order.orderStatus}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/orders/${order.id}`}>Show</Link>
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

const mapState = state => {
  return {
    user: state.user,
    orders: state.orders.collection
  }
}

export default connect(mapState, {fetchOrders})(Account)
