import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Divider, Button, List} from 'semantic-ui-react'

class CartSideBar extends React.Component {
  render() {
    const {totalPrice, path, title} = this.props

    return (
      <Card>
        <Card.Content>
          <Card.Header>Order Summary</Card.Header>
          <List divided verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                ${totalPrice.toFixed(2)}
              </List.Content>
              <List.Content>Subtotal</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">Free</List.Content>
              <List.Content>Shipping</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                ${totalPrice.toFixed(2)}
              </List.Content>
              <List.Content>Order Total</List.Content>
            </List.Item>
          </List>
          <Card.Description textAlign="center">
            <Link to={path}>
              <Button fluid primary>
                {title}
              </Button>
            </Link>
            {!this.props.user.id && (
              <div>
                <Divider horizontal>or</Divider>
                <Link to="/login">Sign in</Link> for more perks.
              </div>
            )}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CartSideBar)
