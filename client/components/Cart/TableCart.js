import React from 'react'
import {Table} from 'semantic-ui-react'

class TableCart extends React.Component {
  render() {
    return (
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.props.children}
      </Table>
    )
  }
}

export default TableCart
