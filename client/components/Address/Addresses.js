import React, {Component} from 'react'
import {
  Grid,
  Card,
  Icon,
  Button,
  Table,
  Modal,
  Container
} from 'semantic-ui-react'
import {openModal} from '../../reducers/addressReducer'
import {EditAddressForm} from './EditAddressForm'
import AddAddressForm from './AddAddressForm'
import {connect} from 'react-redux'
import Stripe from '../CreditCards/Stripe'

class Addresses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  show = size => () => this.setState({size, open: true})

  render() {
    const {user, address, cart} = this.props
    const filteredUser = address.addresses.filter(ele => ele.id === user.id)
    const {open, size} = this.state
    const shipping = 1.99
    console.log('cart', cart)

    return (
      <Container>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={8} mobile={16} tablet={16} computer={6}>
              <h4>Shipping Address</h4>
              <p>Change Address</p>
              {filteredUser.map(userAddress => {
                return (
                  <address>
                    <strong>
                      {userAddress.firstName}
                      {userAddress.lastName}
                    </strong>
                    <p>{userAddress.addressOne}</p>
                    <p>{userAddress.addressTwo}</p>
                    <span>{userAddress.state}</span>,
                    <span>{userAddress.zip}</span>
                  </address>

                  //   <Grid.Column>     <Grid centered columns={1}>       <Grid.Column> <Button
                  // fluid color="green">           Ship Here         </Button> </Grid.Column>
                  // <Grid.Row centered columns={2}>         <Grid.Column>        <Button fluid
                  // basic color="grey" onClick={this.props.modal}>   Edit           </Button>
                  // </Grid.Column>         <Grid.Column>     <Button fluid basic color="grey">
                  // Delete           </Button>        </Grid.Column>    </Grid.Row> </Grid>
                  // </Grid.Column> </Grid.Row>
                )
              })}
            </Grid.Column>
            <Grid.Column width={8} mobile={16} tablet={16} computer={4}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Item(s)</Table.Cell>
                    <Table.Cell>${cart.totalPrice}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Shipping</Table.Cell>
                    <Table.Cell>{shipping}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Sales tax</Table.Cell>
                    <Table.Cell>$40.00</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Order total(1 item)</Table.Cell>
                    <Table.Cell>
                      ${(
                        parseFloat(cart.totalPrice) + parseFloat(shipping)
                      ).toFixed(2)}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Stripe />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal size={size} open={this.props.open} onClose={this.close}>
          <Modal.Header>Edit your address?</Modal.Header>
          <Modal.Content>
            <Card fluid>
              <Card.Content extra>
                <a>Enter New Address</a>
                <EditAddressForm
                  userAddress={filteredUser}
                  close={this.close}
                />
              </Card.Content>
            </Card>
          </Modal.Content>
        </Modal>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>

        <Grid centered>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Content>Choose an Address</Card.Content>
              <Card.Content>
                <Card.Description>
                  <Grid divided="vertically" />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a onClick={this.toggleHidden.bind(this)}>
                  <Icon name="add" />
                  Add New Address
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={12}>
            {!this.state.isHidden && (
              <Card fluid>
                <Card.Content extra>
                  <a>Enter New Address</a>
                  <AddAddressForm user={this.props.user} />
                </Card.Content>
              </Card>
            )}
          </Grid.Column>
        </Grid>
      </Container>
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
