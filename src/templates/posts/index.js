/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Container } from 'theme-ui'

import { NavigationContext } from '../../context/Navigation'
import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'
import PostCard from './post-card'
import Arrow from '../../components/svg/Arrow'
import SEO from '../../components/SEO'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const AllPosts = ({
  data: {
    posts: { edges },
  },
  pageContext: { previousPagePath, nextPagePath, ...pageContext },
}) => {
  const [, setShowSidenav] = React.useContext(NavigationContext)

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])
  return (
    <>
      <SEO title="All Posts - Hacklab Foundation" />
      <Layout navigation={<Navigation color="black" />}>
        <Container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: ['column', 'column', 'row'],
            gap: 'flexGap',
            pt: ['1.25rem', '1.25rem', '5rem'],
            width: ['92%', '92%', '82%'],
          }}
        >
          {edges.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              index={index}
              hasFeaturedPost={true}
            />
          ))}
        </Container>
        {(previousPagePath || nextPagePath) && (
          <Container
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              // @ts-ignore
              borderTop: (t) => `solid 1px ${t.colors.neutral.border}`,
              paddingTop: '2rem',
            }}
          >
            {previousPagePath ? (
              <Link
                sx={{
                  fontSize: 'paragraph2',
                  fontWeight: 'medium',
                  color: '#667085',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
                to={previousPagePath}
              >
                <Arrow width="1rem" orientation="left" />
                <span
                  sx={{
                    ml: '.5rem',
                  }}
                >
                  Previous
                </span>
              </Link>
            ) : null}
            {nextPagePath ? (
              <Link
                sx={{
                  fontSize: 'paragraph2',
                  color: '#667085',
                  fontWeight: 'medium',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  ...(!previousPagePath && {
                    marginLeft: 'auto',
                  }),
                }}
                to={nextPagePath}
              >
                <span
                  sx={{
                    mr: '.5rem',
                  }}
                >
                  Next
                </span>
                <Arrow width="1rem" orientation="right" />
              </Link>
            ) : null}
          </Container>
        )}
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    posts: allWpPost(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
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

export default AllPosts
