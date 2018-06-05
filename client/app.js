import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'
import {fetchProducts} from './reducers/productsReducer'
import {setCart} from './reducers/cartReducer';

class App extends Component {
  componentDidMount() {
    const {getProducts} = this.props;

    getProducts()
  }

  render() {

    return (
      <Layout>
        <Navbar/>
        <Routes/>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const {products} = state.products
  return {products}

}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
