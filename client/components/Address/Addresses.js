import React from 'react'
import {Grid, Card, Icon, Button, Divider} from 'semantic-ui-react'

const Addresses = () => {
  return (
    <Grid centered>
      <Grid.Column width={12}>
        <Card fluid>
          <Card.Content>Choose an Address</Card.Content>
          <Card.Content>
            <Card.Description>
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  <Grid.Column className="no-bottom">
                    <address>
                      <strong>Kenneth Zhu</strong>
                      <p>21 Jump Street</p>
                      <span>NY</span>,
                      <span>10001</span>
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
                          <Button fluid basic color="grey">
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
                </Grid.Row>
              </Grid>
              <Divider />
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  <Grid.Column className="no-bottom">
                    <address>
                      <strong>Kenneth Zhu</strong>
                      <p>21 Jump Street</p>
                      <span>NY</span>,
                      <span>10001</span>
                    </address>
                  </Grid.Column>
                  <Grid.Column
                    style={{
                      display: 'none'
                    }}
                  >
                    <Grid centered columns={1}>
                      <Grid.Column>
                        <Button fluid color="green">
                          Ship Here
                        </Button>
                      </Grid.Column>
                      <Grid.Row centered columns={2}>
                        <Grid.Column>
                          <Button fluid basic color="grey">
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
                </Grid.Row>
              </Grid>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="add" />
              Add an address
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default Addresses
