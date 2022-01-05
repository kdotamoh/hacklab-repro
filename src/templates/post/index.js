/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import day from 'dayjs'
const readingTime = require('reading-time/lib/reading-time')

import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'
import { NavigationContext } from '../../context/Navigation'
import PostCard from '../posts/post-card'
import SEO from '../../components/SEO'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Post = ({ data, pageContext }) => {
  const [, setShowSidenav] = React.useContext(NavigationContext)

  const stats = readingTime(data.post.content)

  console.log('pageContext.seo', pageContext.seo)

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])
  return (
    <>
      <SEO seo={pageContext.seo} />
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
            <span
              sx={{
                color: '#9CA3AF',
                mx: '1.5rem',
              }}
            >
              &bull;
            </span>
            <div
              sx={{
                color: '#9CA3AF',
                display: 'flex',
                gap: '1.5rem',
              }}
            >
              <span>{day(data.post.date).format('MMM D, YYYY')}</span>
              <span>{stats.text}</span>
            </div>
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
          {data.readMore?.edges?.length > 0 && (
            <div
              sx={{
                pt: ['1.25rem', '1.25rem', '5rem'],
              }}
            >
              <h3
                sx={{
                  mb: '2.5rem',
                  textAlign: 'center',
                }}
              >
                Read more
              </h3>
              <div
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: ['column', 'column', 'row'],
                  gap: 'flexGap',
                }}
              >
                {data.readMore?.edges?.map((post, index) => (
                  <PostCard key={index} post={post} index={index} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($databaseId: Int!) {
    post: wpPost(databaseId: { eq: $databaseId }) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    readMore: allWpPost(limit: 3, filter: { databaseId: { ne: $databaseId } }) {
      edges {
        node {
          excerpt
          uri
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default Post
