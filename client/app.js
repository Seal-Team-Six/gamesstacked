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
    const {
      fetchProducts,
      fetchAddresses,
      me,
      requestCart,
      currentUser,
      setLocalCart,
      setCart,
      user
    } = this.props

    me()
    fetchProducts()
    requestCart()
    fetchAddresses()

    if (!currentUser) {
      setLocalCart()
    }
  }

  componentWillReceiveProps(nextProps) {
    const {setCart, user} = this.props

    if (nextProps.user.id !== user.id) {
      setCart(nextProps.user.id)
    }
  }

  render() {
    // if (!this.props.user.id) { return <div>Loading</div> }
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
