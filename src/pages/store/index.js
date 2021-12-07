/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from '@theme-ui/components'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import { getAllProducts } from '../../api/products/get-all-products'

const Store = ({ data }) => {
  const products = data.products.nodes

  const categories = [
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
    {
      title: 'Clothing Collection',
      description: 'Checkout the new merch available',
      buttonText: 'Shop now',
    },
  ]

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
    <Layout>
      <div
        sx={{
          height: '92vh',
          backgroundImage:
            'url(https://ph-live-05.slatic.net/shop/713c25a63df58640b72713168bf78d4a.jpeg_2200x2200q80.jpg_.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          position: 'relative',
        }}
      >
        <div
          sx={{
            color: 'white',
            position: 'absolute',
            zIndex: '10',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h1
            sx={{
              fontSize: '4.5rem',
              mb: '.5rem',
            }}
          >
            New arrivals here
          </h1>
          <h2
            sx={{
              fontSize: '2rem',
              fontWeight: 'medium',
              mb: '2.5rem',
            }}
          >
            Checkout the new merch available
          </h2>
          <Button>Shop now</Button>
        </div>
        <div
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            bg: 'rgba(0, 0, 0, 0.35)',
          }}
        />
      </div>
      <div
        sx={{
          width: '100%',
          padding: '1rem',
          maxWidth: '87.5rem',
          display: 'grid',
          margin: '0 auto',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          mb: '6rem',
        }}
      >
        {categories.map((category, index) => (
          <div
            sx={{
              backgroundImage:
                'url("https://media.cntraveler.com/photos/60db7a42303d7ca9bcab2bfc/master/w_2100,h_1500,c_limit/Best%20Travel%20Backpacks%20for%20Every%20Type%20of%20Vacation-2021_Dagne%20Dover%20large%20dakota%20backpack.jpg")',
              height: '23rem',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
            }}
            key={index}
          >
            <div
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                width: 'fit-content',
                px: '4.5rem',
              }}
            >
              <h3>Category</h3>
              <p
                sx={{
                  mt: '.5rem',
                  fontSize: 'paragraph1',
                }}
              >
                {category.description}
              </p>
            </div>
            <Button
              sx={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Shop now
            </Button>
            <div
              sx={{
                bg: 'rgba(0, 0, 0, 0.4)',
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        ))}
      </div>
      <h3
        sx={{
          textAlign: 'center',
        }}
      >
        Popular products
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
        {products &&
          products.map((item, index) => (
            <Link
              sx={{
                flexBasis: ['100%', '100%', `${width}%`],
                borderTopLeftRadius: 'sm',
                borderTopRightRadius: 'sm',
                pb: '1rem',
              }}
              key={index}
              to={`/store${item.uri}`}
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
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <p>{item.price}</p>
            </Link>
          ))}
      </Container>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            bg: 'primary',
            borderRadius: 'sm',
            transform: 'scale(1.03)',
            padding: '4rem',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            mt: '7.25rem',
            boxShadow:
              '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: 'neutral.white',
            }}
          >
            <h3
              sx={{
                mb: '1rem',
              }}
            >
              Get 25% off for your first time purchase
            </h3>
            <p>
              Most of our products are limited releases that won’t come back.
              Get your favorite item now
            </p>
          </div>
          <Button
            sx={{
              width: 'max-content',
              height: 'max-content',
              ml: 'auto',
            }}
            variant="whitePrimary"
          >
            Get Discount
          </Button>
        </div>
      </Container>
      <div
        sx={{
          bg: 'neutral.backgroundPressed',
          height: '14rem',
          mt: '-7rem',
        }}
      ></div>
    </Layout>
  )
}

export const query = graphql`
  {
    products: allWpProduct {
      nodes {
        name
        slug
        attributes {
          nodes {
            label
            name
            options
            position
          }
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        image {
          sourceUrl
        }
        localAttributes {
          nodes {
            name
          }
        }
        purchasable
        ... on WpSimpleProduct {
          name
          price
          uri
        }
      }
    }
  }
`

export default Store
