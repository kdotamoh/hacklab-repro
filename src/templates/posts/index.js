/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Container } from 'theme-ui'

import Layout from '../../components/Layout'
import Navigation from '../../components/layout/Navigation'

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
}) => {
  const width = '31.881'
  const gap = '2.17'

  return (
    <Layout header={<Navigation color="neutral.black" />}>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: `${gap}%`,
          pt: '5rem',
        }}
      >
        {edges.map((post, index) => (
          <Link
            to={`/blog${post.node.uri}`}
            sx={{
              borderRadius: 'sm',
              textDecoration: 'none',
              color: 'neutral.black',
              display: 'flex',
              ...(index === 0
                ? {
                    minHeight: '27rem',
                    flexDirection: 'row',
                    flexBasis: '100%',
                    mb: '5rem',
                    bg: 'neutral.backgroundPressed',
                  }
                : {
                    flexDirection: 'column',
                    flexBasis: `${width}%`,
                    mb: '2.5rem',
                    bg: 'neutral.backgroundHover',
                  }),
            }}
            key={index}
          >
            <img
              sx={{
                objectFit: 'cover',
                borderTopLeftRadius: 'sm',
                ...(index === 0
                  ? {
                      borderBottomLeftRadius: 'sm',
                      borderTopRightRadius: 'none',
                      width: `calc((2 * ${width}%) + ${gap}%)`,
                      height: '100%',
                    }
                  : {
                      borderTopRightRadius: 'sm',
                      width: '100%',
                      height: '12.5rem',
                    }),
              }}
              src={post.node.featuredImage?.node?.sourceUrl}
              alt=""
            />
            <div
              sx={{
                flex: '1 1 auto',
                ...(index === 0
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '2.5rem',
                    }
                  : {
                      padding: '1rem 1.5rem',
                    }),
              }}
            >
              <span
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  fontSize: 'caption',
                  letterSpacing: '.025rem',
                  ...(index === 0
                    ? {
                        color: 'neutral.textDisabled',
                      }
                    : {
                        color: 'primary.main',
                      }),
                }}
              >
                PODCAST
              </span>
              <div
                sx={{
                  ...(index === 0 && {
                    flex: '1 1 auto',
                  }),
                }}
              >
                <p
                  sx={{
                    py: '1rem',
                    fontWeight: 'bold',
                    lineHeight: 'h3',
                    fontSize: 'h3',
                  }}
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
                <p
                  sx={{
                    fontSize: '1rem',
                    color: 'neutral.textPlaceholder',
                  }}
                >
                  text
                </p>
              </div>
              {index === 0 && (
                <div
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                  }}
                >
                  <span
                    sx={{
                      borderRadius: 'rounded',
                      width: '2.5rem',
                      height: '2.5rem',
                      bg: 'primary.main',
                    }}
                  ></span>
                  <div
                    sx={{
                      flex: 'display',
                      flexDirection: 'column',
                    }}
                  >
                    <p
                      sx={{
                        fontSize: 'paragraph2',
                        fontWeight: 'bold',
                        pb: '.25rem',
                      }}
                    >
                      Mechenzy
                    </p>
                    <p
                      sx={{
                        fontSize: 'paragraph2',
                        color: 'neutral.textDisabled',
                      }}
                    >
                      Writer
                    </p>
                  </div>
                </div>
              )}
            </div>
            {index !== 0 && (
              <span
                sx={{
                  px: '1.5rem',
                  pb: '1.5rem',
                  fontSize: 'paragraph2',
                  color: 'neutral.textDisabled',
                }}
              >
                Aug 09 | USA
              </span>
            )}
          </Link>
        ))}
      </Container>
    </Layout>
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
          uri
          date
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
