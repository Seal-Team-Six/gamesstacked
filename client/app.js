import React from 'react'
import { connect } from 'react-redux' 

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'

import { setCart } from './reducers/cartReducer';


class App extends React.Component {
	componentDidMount () {
		const { setCart, user } = this.props;

		// setCart(user.id)
	}

  render () {
  	return (
	    <Layout>
	      <Navbar />
	      <Routes />
	    </Layout>
	  )
  }
}

function mapStateToProps (state) {
	const { user } = state.user;

	return {
		user
	}
}

export default connect(mapStateToProps, { setCart })(App)