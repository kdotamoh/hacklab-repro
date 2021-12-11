/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import Menu from '../../components/store/layout/menu'
import parsePrice from '../../utils/parsePrice'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Product = ({ pageContext: { category } }) => {
  const products = category.products.nodes

  const width = '31.881'

  return (
    <Layout>
      <Menu />
      <h3
        sx={{
          textAlign: 'center',
          mt: '2rem',
        }}
      >
        {category.name}
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
                src={item.image?.sourceUrl}
                alt=""
              />
              <p
                sx={{
                  fontWeight: 'medium',
                  pt: '1rem',
                  pb: '.5rem',
                }}
                dangerouslySetInnerHTML={{ __html: item.name }}
              />
              <p>GH¢{parsePrice({ price: item.price })}</p>
            </Link>
          ))}
      </Container>
    </Layout>
  )
}

export default Product
