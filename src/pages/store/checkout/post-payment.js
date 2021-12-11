/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

import Layout from '../../../components/Layout'
import Menu from '../../../components/store/layout/menu'

const PostPayment = () => {
  return (
    <Layout>
      <Menu />
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
