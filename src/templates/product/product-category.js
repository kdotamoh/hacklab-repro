/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

import { StoreLayout } from '../../components/Layout'
import Menu from '../../components/store/layout/menu'
import ProductCard from '../../components/store/product/card'

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

  return (
    <StoreLayout>
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
            <ProductCard key={index} {...{ item }} />
          ))}
      </Container>
    </StoreLayout>
  )
}

export default Product
