import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Icon, Grid} from 'semantic-ui-react'

class ThankYou extends React.Component {
  render() {
    return (
      <Grid centered className="thank-you">
        <Grid.Column width={8}>
          <Card fluid color="green">
            <Card.Content>
              <Card.Header textAlign="center">
                Thank you for your purchase!
              </Card.Header>
              <Card.Meta textAlign="center">
                <Icon name="star outline" /> You've earned{' '}
                {Math.floor(Math.random() * 10000 + 1)} cool points!
              </Card.Meta>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <Link to="/products"> Shop for more! </Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ThankYou
