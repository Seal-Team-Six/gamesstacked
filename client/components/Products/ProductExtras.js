import React from 'react'
import {Grid, Embed, Divider} from 'semantic-ui-react'
import Gallery from 'react-grid-gallery'

const ProductExtras = props => {
  const {selectedProduct} = props

  const images =
    selectedProduct.screenshots &&
    selectedProduct.screenshots.map(screenshot => {
      return {
        id: `${screenshot.id}`,
        src: `http://${screenshot.url}`,
        thumbnail: `http://${screenshot.url}`,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false
      }
    })

  return (
    <div>
      <div>
        <Grid.Column width={10}>
          {selectedProduct && selectedProduct.videos ? (
            <div>
              <Divider horizontal>Videos</Divider>
              <Embed
                id={selectedProduct.videos[0].video_id}
                placeholder={`http://${selectedProduct.cover.url}`}
                source="youtube"
              />
            </div>
          ) : null}
        </Grid.Column>
      </div>
      <div>
        <Grid.Column width={16}>
          {selectedProduct.screenshots && selectedProduct.screenshots.length ? (
            <div>
              <Divider horizontal>Screenshots</Divider>
              <Gallery
                images={images}
                key={selectedProduct.id}
                backdropClosesModal={true}
                preloadNextImage={true}
              />
            </div>
          ) : null}
        </Grid.Column>
      </div>
    </div>
  )
}

export default ProductExtras
