import React, {Component} from 'react'
import {Grid, Card, Icon, Button, Divider, Modal} from 'semantic-ui-react'
import {openModal} from '../../reducers/addressReducer'
import {EditAddressForm} from './EditAddressForm'
import {connect} from 'react-redux'

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
    const {user, address} = this.props
    const filteredUser = address.addresses.filter(ele => ele.id === user.id)
    const {open, size} = this.state

    return (
      <div>
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

        <Grid centered>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Content>Choose an Address</Card.Content>
              <Card.Content>
                <Card.Description>
                  <Grid divided="vertically">
                    {filteredUser.map(userAddress => {
                      return (
                        <Grid.Row columns={2} key={userAddress.id}>
                          <Grid.Column>
                            <address>
                              <strong>
                                {userAddress.firstName} {userAddress.lastName}
                              </strong>
                              <p>{userAddress.addressOne}</p>
                              <p>{userAddress.addressTwo}</p>
                              <span>{userAddress.state}</span>,
                              <span>{userAddress.zip}</span>
                            </address>
                          </Grid.Column>
                          <Grid.Column>
                            <Grid centered columns={1}>
                              <Grid.Column>
                                <Button fluid color="green">
                                  Ship Here
                                </Button>
                              </Grid.Column>
                              <Grid.Row centered columns={2}>
                                <Grid.Column>
                                  <Button
                                    fluid
                                    basic
                                    color="grey"
                                    onClick={this.props.modal}
                                  >
                                    Edit
                                  </Button>
                                </Grid.Column>
                                <Grid.Column>
                                  <Button fluid basic color="grey">
                                    Delete
                                  </Button>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Grid.Column>
                          <Divider />
                        </Grid.Row>
                      )
                    })}
                  </Grid>
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
      </div>
    )
  }
}
const mapState = state => {
  return {
    user: state.user,
    address: state.addresses,
    open: state.addresses.open
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
