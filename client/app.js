import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'
import {fetchProducts} from './reducers/productsReducer'
import {fetchAddresses} from './reducers/addressReducer'
import {me} from './reducers/store'
import {setCart, requestCart, setLocalCart} from './reducers/cartReducer'
import CartModal from './components/Cart/CartModal'

class App extends Component {
  componentDidMount() {
    const {currentUser} = this.props

    this.props.me()
    this.props.fetchProducts()
    this.props.requestCart()
    this.props.fetchAddresses()

    if (!currentUser) {
      this.props.setLocalCart()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {user} = this.props

    if (nextProps.user.id !== user.id) {
      this.props.setCart(nextProps.user.id)
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

  return {
    products,
    user: state.user,
    currentUser: !!state.user.id
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchProducts,
    me,
    requestCart,
    setCart,
    setLocalCart,
    fetchAddresses
  })(App)
)
