/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'

import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'
import { NavigationContext } from '../../context/Navigation'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Post = ({ data }) => {
  const [, setShowSidenav] = React.useContext(NavigationContext)

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])
  return (
    <Layout navigation={<Navigation color="black" />}>
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <h1
          sx={{
            pt: ['3.75rem', '3.75rem', '5rem'],
            fontSize: ['h2', 'h2', 'h1'],
            mb: '1.5rem',
          }}
        >
          {data.post.title}
        </h1>
        <img
          sx={{
            width: '100%',
            height: 'auto',
            mb: '2rem',
            borderRadius: 'sm',
          }}
          src={data.post.featuredImage?.node?.sourceUrl}
          alt=""
        />
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            mb: '2.5rem',
          }}
        >
          <div
            sx={{
              width: '2rem',
              height: '2rem',
              bg: 'primary',
              borderRadius: 'rounded',
            }}
          />
          <span
            sx={{
              fontSize: 'paragraph2',
              fontWeight: 'bold',
            }}
          >
            Mechenzy
          </span>
        </div>
        <div
          sx={{
            mb: '2.5rem',
            h2: {
              pb: '2.5rem',
            },
            p: {
              lineHeight: 'h3',
            },
          }}
          dangerouslySetInnerHTML={{ __html: data.post.content }}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($databaseId: Int!) {
    post: wpPost(databaseId: { eq: $databaseId }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

export default Post
