import {expect} from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {fetchAddresses} from './addressReducer'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let mockAxios
  let store

  const initialState = {
    addresses: [],
    open: false
  }

  const addressExample = {
    firstName: 'John',
    lastName: 'Smith',
    addressOne: '21 Jump Street',
    addressTwo: '',
    city: 'New York',
    state: 'New York',
    zip: '10001',
    userId: 1
  }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAddresses', () => {
    it('eventually dispatch gotAddress', () => {
      mockAxios.onGet('/api/address').replyOnce(200, addressExample)
      return store.dispatch(fetchAddresses()).then(() => {
        const actions = store.getActions()
        expect(actions[0].type).to.be.equal('GOT_ADDRESS')
        expect(actions[0].address).to.be.deep.equal(addressExample)
      })
    })
  })
})
