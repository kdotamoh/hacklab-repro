/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button, AspectImage } from '@theme-ui/components'

import Layout from '../../components/Layout'
import { getProductById } from '../../api/products/get-product-by-id'
import { StoreContext } from '../../context/Store'
import { navigate } from 'gatsby'

const Detail = ({ slug, id }) => {
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

  const { addToCart } = React.useContext(StoreContext)
  const [active, setActive] = React.useState(false)
  const [product, setProduct] = React.useState(null)

  const fetchData = async (id) => {
    let res = await getProductById(id)
    console.log(res)
    setProduct(res)
  }

  React.useEffect(() => {
    fetchData(id)
  }, [id])

  const width = '31.881'

  return (
    <Layout>
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
          }}
        >
          <div>
            <AspectImage
              src="https://cdn.shopify.com/s/files/1/0281/2796/products/LIfestyle-2_17eb843b-eced-4a09-a286-3845895de662.jpg?v=1615406723"
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
              <AspectImage
                src="https://target.scene7.com/is/image/Target/GUEST_51fced15-e1cb-4e8b-b5f1-23295edc90e9?wid=488&hei=488&fmt=pjpeg"
                ratio={1.25}
              />
              <AspectImage
                src="https://target.scene7.com/is/image/Target/GUEST_51fced15-e1cb-4e8b-b5f1-23295edc90e9?wid=488&hei=488&fmt=pjpeg"
                ratio={1.25}
              />
              <AspectImage
                src="https://target.scene7.com/is/image/Target/GUEST_51fced15-e1cb-4e8b-b5f1-23295edc90e9?wid=488&hei=488&fmt=pjpeg"
                ratio={1.25}
              />
              <AspectImage
                src="https://target.scene7.com/is/image/Target/GUEST_51fced15-e1cb-4e8b-b5f1-23295edc90e9?wid=488&hei=488&fmt=pjpeg"
                ratio={1.25}
              />
            </div>
          </div>

          <div>
            {product && (
              <div>
                <h4>{product.name}</h4>
                <h3>GH¢ {product.price}</h3>

                <div>
                  <Button variant="white">Add to Cart</Button>
                  <Button
                    onClick={async () => {
                      await addToCart({ product, quantity: 1 })
                      navigate(`/store/checkout`)
                    }}
                  >
                    Buy now
                  </Button>
                </div>

                <p
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Product Details
                </p>
                <p
                  sx={{
                    fontSize: 'paragraph2',
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

export default Detail
