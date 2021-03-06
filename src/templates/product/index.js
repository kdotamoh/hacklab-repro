/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from '@theme-ui/components'
import { navigate } from 'gatsby'

import { StoreLayout } from '../../components/Layout'
import Menu from '../../components/store/layout/menu'
import { NavigationContext } from '../../context/Navigation'
import { StoreContext } from '../../context/Store'
import Quantity from '../../components/store/product/quantity'
import Attributes from '../../components/store/product/attributes'
import ProductCard from '../../components/store/product/card'
import parsePrice from '../../utils/parsePrice'
/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Product = ({ pageContext: { product } }) => {
  const { addToCart, buyNow } = React.useContext(StoreContext)

  const relatedProducts = [
    ...product.crossSell?.nodes,
    ...product.upsell?.nodes,
  ]

  const [, setShowSidenav] = React.useContext(NavigationContext)
  React.useEffect(() => {
    setShowSidenav(false)
  }, [])

  const parsedPrice = parsePrice({ price: product.price })

  React.useEffect(() => {
    const newAttributes = product.attributes?.nodes
      ? [...product.attributes?.nodes]
      : []
    newAttributes.forEach(
      (attribute) => (attribute.selected = attribute.options[0])
    )
    //@ts-ignore
    dispatch({ type: 'initialize', payload: newAttributes })
  }, [])
  const attributesReducer = (attributes, action) => {
    switch (action.type) {
      case 'initialize':
        return action.payload
      case 'setAttribute':
        return attributes.map((attribute) => {
          if (attribute.label === action.payload.label) {
            attribute.selected = action.payload.option
          }
          return attribute
        })
    }
  }
  const [attributes, dispatch] = React.useReducer(attributesReducer, [])
  const handleSelectedAttribute = ({ label, option }) => {
    // @ts-ignore
    dispatch({ type: 'setAttribute', payload: { label, option } })
  }

  const [quantity, setQuantity] = React.useState(1)
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <StoreLayout>
      <Menu />
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', '50% 1fr'],
            gap: '2rem',
            mt: '5rem',
          }}
        >
          <div sx={{ width: '100%' }}>
            <img
              src={product.featuredImage?.node?.sourceUrl}
              alt=""
              sx={{
                width: '100%',
                objectPosition: 'center center',
                objectFit: 'cover',
                aspectRatio: '5/4',
                borderRadius: 'sm',
              }}
            />

            <div
              sx={{
                display: 'grid',
                mt: '1rem',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                width: '100%',
              }}
            >
              {product.galleryImages?.nodes?.map((image, index) => (
                <img
                  key={index}
                  alt=""
                  sx={{
                    aspectRatio: '5/4',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderRadius: 'sm',
                  }}
                  src={image.sourceUrl}
                />
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
                  GH??{parsedPrice}
                </h2>

                {attributes?.map((attribute, index) => (
                  <Attributes
                    key={index}
                    attribute={attribute}
                    handleSelected={handleSelectedAttribute}
                  />
                ))}

                <Quantity
                  decrement={() => decrementQuantity()}
                  increment={() => incrementQuantity()}
                  value={quantity}
                />

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
                    sx={{
                      width: ['50%', '50%', 'max-content'],
                    }}
                    onClick={async () => {
                      await addToCart({
                        product,
                        product_id: product.databaseId,
                        quantity: quantity,
                        meta_data: [
                          ...attributes.map((attribute, index) => {
                            let item = {}
                            item.key = attribute.label
                            item.value = attribute.selected
                            return item
                          }),
                        ],
                      })
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    sx={{
                      width: ['50%', '50%', 'max-content'],
                    }}
                    onClick={async () => {
                      await buyNow({
                        product,
                        product_id: product.databaseId,
                        quantity,
                        meta_data: [
                          ...attributes.map((attribute) => {
                            let item = {}
                            item.key = attribute.label
                            item.value = attribute.selected
                            return item
                          }),
                        ],
                      })
                      navigate(`/store/checkout/${product.slug}`)
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
                  dangerouslySetInnerHTML={{
                    __html: product.description
                      ? product.description
                      : product.shortDescription,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
      {relatedProducts.length > 0 ? (
        <>
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
            {relatedProducts.map((item, index) => (
              <ProductCard key={index} {...{ item }} />
            ))}
          </Container>
        </>
      ) : null}
    </StoreLayout>
  )
}

export default Product
