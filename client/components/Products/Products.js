import React from 'react'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'

const Products = props => {
  const {products} = props
  return <ProductsList products={products} />
}

function mapStateToProps(state) {
  const {products} = state.products
  return {products}
}

export default connect(mapStateToProps)(Products)
