/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Button, AspectImage } from '@theme-ui/components'
import { navigate } from 'gatsby'

import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'
import { NavigationContext } from '../../context/Navigation'
import { StoreContext } from '../../context/Store'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Product = ({ pageContext: { product } }) => {
  const { addToCart } = React.useContext(StoreContext)

  const [, setShowSidenav] = React.useContext(NavigationContext)

  console.log(product)

  const popular = [
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
      price: 'GHC 50',
    },
  ]

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])

  const width = '31.881'

  return (
    <Layout navigation={<Navigation color="black" />}>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            mt: '5rem',
          }}
        >
          <div>
            <AspectImage
              src={product.featuredImage?.node?.sourceUrl}
              ratio={1.25}
              sx={{
                width: '100%',
                objectPosition: 'center center',
              }}
            />

            <div
              sx={{
                display: 'grid',
                mt: '1rem',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                height: '9rem',
                width: '100%',
              }}
            >
              {product.galleryImages?.nodes?.map((image, index) => (
                <AspectImage key={index} src={image.sourceUrl} ratio={1.25} />
              ))}
            </div>
          </div>

          <div>
            {product && (
              <div>
                <h4
                  sx={{
                    mb: '.5rem',
                  }}
                >
                  {product.name}
                </h4>
                <h2
                  sx={{
                    mb: '4rem',
                  }}
                >
                  GH¢ {product.price}
                </h2>

                <div
                  sx={{
                    mt: '2.5rem',
                    display: 'flex',
                    gap: '1rem',
                    mb: '4rem',
                  }}
                >
                  <Button
                    variant="white"
                    onClick={async () => {
                      await addToCart({
                        product,
                        product_id: product.databaseId,
                        quantity: 1,
                      })
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={async () => {
                      await addToCart({
                        product,
                        product_id: product.databaseId,
                        quantity: 1,
                      })
                      navigate(`/store/checkout`)
                    }}
                  >
                    Buy now
                  </Button>
                </div>

                <p
                  sx={{
                    fontWeight: 'bold',
                    mb: '1.5rem',
                  }}
                >
                  Product Details
                </p>
                <p
                  sx={{
                    fontSize: 'paragraph2',
                    mb: '10rem',
                  }}
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
      <h3
        sx={{
          textAlign: 'center',
        }}
      >
        You may also like
      </h3>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
          display: 'flex',
          gap: 'flexGap',
          rowGap: ['1.5rem', '1.5rem', '2.5rem'],
          flexWrap: 'wrap',
          pt: '3.5rem',
        }}
      >
        {popular.map((item, index) => (
          <div
            sx={{
              flexBasis: ['100%', '100%', `${width}%`],
              borderTopLeftRadius: 'sm',
              borderTopRightRadius: 'sm',
              pb: '1rem',
            }}
            key={index}
          >
            <img
              sx={{
                width: '100%',
                height: '18rem',
                objectFit: 'cover',
                borderTopLeftRadius: 'sm',
                borderTopRightRadius: 'sm',
              }}
              src="https://media.cntraveler.com/photos/60db7a42303d7ca9bcab2bfc/master/w_2100,h_1500,c_limit/Best%20Travel%20Backpacks%20for%20Every%20Type%20of%20Vacation-2021_Dagne%20Dover%20large%20dakota%20backpack.jpg"
              alt=""
            />
            <p
              sx={{
                fontWeight: 'medium',
                pt: '1rem',
                pb: '.5rem',
              }}
            >
              {item.description}
            </p>
            <p>{item.price}</p>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($databaseId: Int!) {
    post: wpPost(databaseId: { eq: $databaseId }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

export default Product
