import React from 'react'
import {Form} from 'semantic-ui-react'

const Addresses = () => {
  return (
    <Form>
      <label>Size</label>
      <Form.Radio
        label="Address"
        value="address"
        checked={value === 'sm'}
        // onChange={this.handleChange}
      />
    </Form>
  )
}

export default Addresses
