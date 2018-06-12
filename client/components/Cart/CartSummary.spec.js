import 'jsdom-global/register'
import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CartSummary from './CartSummary'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CartSummary', () => {
  let cartSummary
  const value = Math.random() * 50

  beforeEach(() => {
    cartSummary = mount(<CartSummary totalPrice={value} />)
  })

  it('renders the order total in a card description', () => {
    expect(cartSummary.find('.description').text()).to.be.equal(
      `Order Total: $${value.toFixed(2)}`
    )
  })
})
