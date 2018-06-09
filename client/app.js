import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'
import {fetchProducts} from './reducers/productsReducer'
import {me} from './reducers/store'
import {
  setCart,
  setItems,
  requestCart,
  setLocalCart
} from './reducers/cartReducer'

import CartModal from './components/Cart/CartModal'

class App extends Component {
  componentDidMount() {
    const {
      fetchProducts,
      me,
      requestCart,
      currentUser,
      setLocalCart,
      setCart
    } = this.props

    me()
    fetchProducts()
    requestCart()

    if (!currentUser) {
      setLocalCart()
    }
  }

  render() {
    return (
      <Layout>
        <CartModal />
        <Navbar />
        <Routes />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const {products} = state.products
  const {user} = state.user

  return {
    products,
    user,
    currentUser: !!state.user.id
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchProducts,
    me,
    requestCart,
    setCart,
    setLocalCart
  })(App)
)
