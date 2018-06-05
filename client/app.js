import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout'
import {fetchProducts} from './reducers/productsReducer'

class App extends Component {
  componentDidMount() {
    this
      .props
      .getProducts()
  }

  render() {
    console.log('products', this.props.products)
    return (
      <Layout>
        <Navbar/>
        <Routes/>
      </Layout>
    )

  }
}

const mapStateToProps = state => {
  return {products: state.products}
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
