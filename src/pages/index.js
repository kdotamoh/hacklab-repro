/** @jsxImportSource theme-ui */
import * as React from 'react'

import Layout from '../components/Layout'
import Impact from '../components/layout/Impact'
import Partners from '../components/layout/Partners'
import Initiatives from '../components/layout/Initiatives'
import Reviews from '../components/layout/Reviews'
import Header from '../components/layout/Header'
import Newsletter from '../components/layout/Newsletter'
import DownloadApp from '../components/layout/DownloadApp'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Header />
        <Impact />
        <Partners />
        <Initiatives />
        <Reviews />
        <DownloadApp />
        <Newsletter />
      </main>
    </Layout>
  )
}

export default IndexPage
