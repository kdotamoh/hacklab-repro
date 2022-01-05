const { paginate } = require('gatsby-awesome-pagination')

const postTemplate = require.resolve('../src/templates/post')
const postsIndexTemplate = require.resolve('../src/templates/posts')

const GET_POSTS = `
  query GET_POSTS {
    allWpPost {
      totalCount
      edges {
        next {
          uri
          databaseId
        }
        previous {
          uri
          databaseId
        }
        node {
          uri
          databaseId
          seo {
            fullHead
            readingTime
          }
        }
      }
    }
  }
`

const allPosts = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create posts in our static site.
   */
  const { createPage } = actions

  /**
   * Fetch posts method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPosts = async () =>
    /**
     * Fetch posts using the GET_POSTS query and the variables passed in.
     */
    await graphql(GET_POSTS).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpPost: { edges },
      } = data

      edges &&
        edges.map((posts) => {
          allPosts.push(posts)
        })

      /**
       * If there's another post, fetch more
       * so we can have all the data we need.
       */
      // if (hasNextPage) {
      //   pageNumber++
      //   reporter.info(`fetch post ${pageNumber} of posts...`)
      //   return fetchPosts({ first: itemsPerPage, after: endCursor })
      // }

      /**
       * Once we're done, return all the posts
       * so we can create the necessary posts with
       * all the data on hand.
       */
      return allPosts
    })

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts.
   */
  await fetchPosts().then((wpPosts) => {
    wpPosts &&
      wpPosts.map((post) => {
        /**
         * Build post path based of theme blogURI setting.
         */
        const path = `blog${post.node.uri}`

        createPage({
          path: path,
          component: postTemplate,
          context: {
            post: post,
            seo: post.node.seo,
            databaseId: post.node.databaseId,
            nextId: post.next ? post.next.databaseId : null,
            prevId: post.previous ? post.previous.databaseId : null,
          },
        })

        reporter.info(`post created:  ${post.node.uri}`)
      })

    reporter.info(`# -----> POSTS TOTAL: ${wpPosts.length}`)

    paginate({
      createPage,
      items: wpPosts,
      itemsPerPage: 10,
      pathPrefix: '/blog',
      component: postsIndexTemplate,
    })
  })
}
