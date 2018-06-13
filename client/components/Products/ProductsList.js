import React, {Component} from 'react'
import Product from './Product'
import {Grid} from 'semantic-ui-react'
import SidebarContainer from '../Sidebar/SidebarContainer'

class ProductsList extends Component {
  constructor() {
    super()
    this.state = {
      term: ''
    }
  }

  getSearchTerm = term => {
    this.setState({term: term})
  }

  render() {
    const {products} = this.props

    const searchTerm = products.filter(ele => {
      const search = ele.name.toLowerCase()
      return search.includes(this.state.term)
    })

    return (
      <div>
        <Grid container columns={2} divided>
          <Grid.Row>
            <Grid.Column width={12}>
              <Grid columns={4}>
                {searchTerm.map(product => {
                  return (
                    <Grid.Column key={product.id}>
                      <Product product={product} />
                    </Grid.Column>
                  )
                })}
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
              <SidebarContainer func={this.getSearchTerm} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProductsList
