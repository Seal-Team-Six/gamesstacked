import React, {Component} from 'react'
import {
  Grid,
  Card,
  Icon,
  Button,
  Table,
  Modal,
  Container,
  Image
} from 'semantic-ui-react'
import {openModal} from '../../reducers/addressReducer'
import {EditAddressForm} from './EditAddressForm'
import AddAddressForm from './AddAddressForm'
import {connect} from 'react-redux'
import Stripe from '../CreditCards/Stripe'

class Addresses extends Component {
  constructor(props) {
    super(props)
    // this.state = {   isHidden: true }
  }
  // toggleHidden() {   this.setState({     isHidden: !this.state.isHidden   }) }

  show = size => () => this.setState({size, open: true})

  render() {
    const {user, address, cart} = this.props
    const filteredUser = address.addresses.filter(ele => ele.id === user.id)

    const shipping = 1.99
    const cartItems = cart.cartItems
    console.log('props', this.props)

    return (
      <Grid container celled>
        <Grid.Row>
          <Grid.Column width={8}>
            <Grid divided="vertically">
              <Grid.Row columns={1}>
                <Grid.Column>
                  <h3>Double Check Your Order</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <p>Shipping Address</p>
                  <address>
                    {filteredUser[0] && filteredUser[0].firstName}
                    {filteredUser[0] && filteredUser[0].lastName}
                    <p>{filteredUser[0] && filteredUser[0].addressOne}</p>
                    <p>{filteredUser[0] && filteredUser[0].addressTwo}</p>
                    <span>{filteredUser[0] && filteredUser[0].state}</span>,
                    <span>{filteredUser[0] && filteredUser[0].zip}</span>
                  </address>
                </Grid.Column>
                <Grid.Column>
                  <p>Payment Method</p>
                  <Grid divided="vertically">
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Image src="http://www.pngall.com/wp-content/uploads/2016/07/Mastercard-PNG-Clipart.png" />
                      </Grid.Column>
                      <Grid.Column>
                        <p>Master Card ...2474</p>
                        <p>Exp: 01/2019</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8}>
            <Table singleLine>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Item(s)</Table.Cell>
                  <Table.Cell>
                    ${parseFloat(cart.totalPrice).toFixed(2)}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Shipping</Table.Cell>
                  <Table.Cell>${shipping}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    Order total({cart.cartQuantity}
                    )
                  </Table.Cell>
                  <Table.Cell>
                    ${(
                      parseFloat(cart.totalPrice) + parseFloat(shipping)
                    ).toFixed(2)}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Stripe ownProps={this.props.ownProps} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <h4>Name of Product</h4>
            {cartItems.map(cartItem => {
              return (
                <Grid divided="vertically" key={cartItem.id}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src={`http://${cartItem.product.cover.url}`} />
                    </Grid.Column>
                    <Grid.Column>Quantity: 1</Grid.Column>
                  </Grid.Row>
                </Grid>
              )
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
const mapState = state => {
  return {
    user: state.user,
    address: state.addresses,
    open: state.addresses.open,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modal: () => {
      dispatch(openModal())
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Addresses)
