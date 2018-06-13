import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {RegisterForm} from '../Auth/RegisterForm'
import {EditAccountForm} from '../Auth/EditAccountForm'
import {Container, Button, Table} from 'semantic-ui-react'
import {fetchOrders, fetchOrder} from '../../reducers/orderReducer'
import {Link} from 'react-router-dom'
import {SingleOrderNonAdmin} from '../Admin/Orders'
/**
 * COMPONENT
 */

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      orderHidden: true
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
  toggleOrderDetails() {
    this.setState({
      isHidden: !this.state.orderHidden
    })
  }

  render() {
    const {user} = this.props
    const {orders} = this.props
    console.log('**************', this.props)
    const theseOrders = orders.filter(
      order => order.userId === parseInt(user.id)
    )
    // console.log(theseOrders)

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
                  <Table.Cell>${order.subTotal}</Table.Cell>
                  <Table.Cell>{order.orderItems.length}</Table.Cell>
                  <Table.Cell>{order.orderStatus}</Table.Cell>

                  {/* <Button
                    className="formGroup"
                    onClick={this.toggleOrderDetails.bind(this)}
                  >
                    Show
                  </Button> */}

                  <Table.Cell textAlign="right">
                    <Link to={`/orders/${order.id}`}>Show</Link>
                    {/* <Button> Show</Button> */}
                  </Table.Cell>
                  {/* {!this.state.isHidden && (<SingleOrderNonAdmin selectOrder={order.id} />)} */}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
        {/* <SingleOrderNonAdmin /> */}
      </Container>
    )
  }
}

/*///// show order

this.props.fetchOrder()




*/

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    orders: state.orders.collection
  }
}

export default connect(mapState, {fetchOrders})(Account)
