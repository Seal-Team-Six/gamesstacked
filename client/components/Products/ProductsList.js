import React, {Component} from 'react'
import _ from 'lodash'
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

  getSearchTerm = _.debounce(term => {
    this.setState({term})
  }, 300)

  render() {
    const {products} = this.props

    const searchTerm = products.filter(ele => {
      const search = ele.name.toLowerCase()
      return search.includes(this.state.term)
    })

    return (
      <div>
        <Grid container>
          <Grid.Column width={16}>
            <SidebarContainer func={this.getSearchTerm} />
          </Grid.Column>
          <Grid.Row>
            <Grid.Column>
              <Grid columns={4}>
                {searchTerm.map(product => {
                  return (
                    <Grid.Column
                      key={product.id}
                      mobile={16}
                      tablet={6}
                      computer={4}
                    >
                      <Product product={product} />
                    </Grid.Column>
                  )
                })}
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProductsList
