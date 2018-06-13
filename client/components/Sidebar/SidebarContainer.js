import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form} from 'semantic-ui-react'

class SideBarComponent extends Component {
  handleChange = evt => {
    this.props.func(evt.target.value.toLowerCase())
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <input
            placeholder="Search for a game"
            onChange={this.handleChange}
            name="name"
          />
        </Form.Field>
      </Form>
    )
  }
}

const maptStateToProps = state => {
  return {products: state.products.products}
}

export default connect(maptStateToProps)(SideBarComponent)
