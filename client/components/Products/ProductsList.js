import React from 'react';
import Product from './Product';
import { Grid } from 'semantic-ui-react';

class ProductsList extends React.Component {
	render () {
		const { products } = this.props;

		return (
			<Grid columns={4}>
				{
					products.map(product => {
						return (
							<Grid.Column key={product.id}> 
								<Product 
									product={product}
								/>
							</Grid.Column>
						)
					})
				}
			</Grid>
		)
	}
}

export default ProductsList;