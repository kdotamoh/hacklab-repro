/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

import Layout from '../../../components/Layout'

const PostPayment = () => {
  return (
    <Layout>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <p>Thanks for your purchase</p>
      </Container>
    </Layout>
  )
}

export default PostPayment
