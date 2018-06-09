import React from 'react'
import {
  Card,
  Grid,
  Form,
  Radio,
  Icon,
  Divider,
  CardContent,
  Table
} from 'semantic-ui-react'

class CreditCardInfo extends React.Component {
  cardRow(card) {
    return (
      <Table.Row>
        <Table.Cell collapsing>
          <Form.Radio id="1" name="123" fitted />
        </Table.Cell>
        <Table.Cell collapsing>Card ending in 1111</Table.Cell>
        <Table.Cell>NAME HERE</Table.Cell>
        <Table.Cell collapsing textAlign="right">
          EXP DATE
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    return (
      <Form>
        <Grid centered>
          <Grid.Column width={14}>
            <Card fluid>
              <Card.Content>
                <Table striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2" singleLine>
                        Your credit and debit cards
                      </Table.HeaderCell>
                      <Table.HeaderCell singleLine>
                        Name on card
                      </Table.HeaderCell>
                      <Table.HeaderCell singleLine>Expires on</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{this.cardRow()}</Table.Body>
                </Table>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="add" />
                  Add a credt card or debit card
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Form>
    )
  }
}

export default CreditCardInfo
