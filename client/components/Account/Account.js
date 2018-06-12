import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {RegisterForm} from '../Auth/RegisterForm'
import {EditAccountForm} from '../Auth/EditAccountForm'
import {Container, Button} from 'semantic-ui-react'
import {fetchOrders} from '../../reducers/orderReducer'

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

        <div>
          <ul>
            {theseOrders.map(order => {
              return (
                <li key={order.id}>
                  <div>
                    <b>Previous Orders: {order.subTotal}</b>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    )
  }
}

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
