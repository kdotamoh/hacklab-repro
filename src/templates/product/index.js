/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button, AspectImage } from '@theme-ui/components'
import { Link, navigate } from 'gatsby'

import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'
import { NavigationContext } from '../../context/Navigation'
import { StoreContext } from '../../context/Store'
import Quantity from '../../components/store/product/quantity'
import Attributes from '../../components/store/product/attributes'
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
  const { addToCart } = React.useContext(StoreContext)

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
                  GH¢{parsedPrice}
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
                    onClick={async () => {
                      await addToCart({
                        product,
                        product_id: product.databaseId,
                        quantity: quantity,
                        meta_data: [
                          ...attributes.map((attribute) => {
                            let item = {}
                            item.key = attribute.label
                            item.value = attribute.selected
                            return item
                          }),
                        ],
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
              <Link
                to={`/store/product/${item.slug}/`}
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
                  src={item.image.sourceUrl}
                  alt=""
                />
                <p
                  sx={{
                    fontWeight: 'medium',
                    pt: '1rem',
                    pb: '.5rem',
                  }}
                >
                  {item.name}
                </p>
                <p>GH¢{parsePrice({ price: item.price })}</p>
              </Link>
            ))}
          </Container>
        </>
      ) : null}
    </Layout>
  )
}

export default Product
