import 'jsdom-global/register'
import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import store from '../../reducers/store'

import Addresses from './Addresses'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Addresses', () => {
  let addresses

  beforeEach(() => {
    addresses = shallow(<Addresses store={store} />)
  })

  it('returns the right component', () => {
    expect(addresses.exists()).to.be.equal(true)
  })
})
