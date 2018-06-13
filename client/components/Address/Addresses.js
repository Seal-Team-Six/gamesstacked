import React, {Component} from 'react'
import {Grid, Button, Table, Modal, Image} from 'semantic-ui-react'
import {openModal} from '../../reducers/addressReducer'
import {EditAddressForm} from './EditAddressForm'
import {connect} from 'react-redux'
import Stripe from '../CreditCards/Stripe'

class Addresses extends Component {
  show = () => this.props.modal()

  render() {
    const {user, address, cart} = this.props
    const filteredUser = address.addresses.filter(ele => ele.id === user.id)
    const {open} = this.props
    const cartItems = cart.cartItems

    return (
      <Grid container celled>
        <Modal open={open}>
          <Modal.Header>Edit Address</Modal.Header>
          <Modal.Content>
            <EditAddressForm userAddress={filteredUser} close={this.close} />
          </Modal.Content>
        </Modal>

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
                  <h4>Shipping Address</h4>
                  {!user.id ? (
                    <address>
                      <p>Ian Wang</p>
                      <p>21 Jump Street</p>
                      <p>NY, New York 10014</p>
                    </address>
                  ) : (
                    <address>
                      {filteredUser[0] && filteredUser[0].firstName}{' '}
                      {filteredUser[0] && filteredUser[0].lastName}
                      <p>{filteredUser[0] && filteredUser[0].addressOne}</p>
                      <p>{filteredUser[0] && filteredUser[0].addressTwo}</p>
                      <span>
                        {filteredUser[0] && filteredUser[0].state}
                      </span>,{' '}
                      <span>{filteredUser[0] && filteredUser[0].zip}</span>
                    </address>
                  )}
                </Grid.Column>
                <Grid.Column>
                  <Button fluid onClick={() => this.show('small')}>
                    Edit Address
                  </Button>
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
                  <Table.Cell>
                    Order total({cart.cartQuantity}
                    )
                  </Table.Cell>
                  <Table.Cell>
                    ${parseFloat(cart.totalPrice).toFixed(2)}
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
                      <Image
                        src={`http://${cartItem.product.cover.url}`}
                        style={{
                          width: '75px'
                        }}
                      />
                    </Grid.Column>
                    <Grid.Column>Quantity: {cartItem.quantity}</Grid.Column>
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
