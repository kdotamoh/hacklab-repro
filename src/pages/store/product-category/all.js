/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import { graphql } from 'gatsby'

import { StoreLayout } from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'
import ProductCard from '../../../components/store/product/card'

const ReviewAndPay = ({ data }) => {
  const products = data.products.nodes
  return (
    <StoreLayout>
      <Menu />
      <h3
        sx={{
          textAlign: 'center',
          mt: '2rem',
        }}
      >
        All products
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

export const query = graphql`
  {
    products: allWpProduct(sort: { fields: date, order: DESC }) {
      nodes {
        ...ProductInformation
      }
    }
  }
`

export default ReviewAndPay
