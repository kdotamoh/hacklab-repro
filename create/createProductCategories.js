const categoryTemplate = require.resolve(
  '../src/templates/product/product-category.js'
)

const GET_PRODUCT_CATEGORIES = `
  query GET_PRODUCT_CATEGORIES {
    allWpProductCategory {
      nodes {
        uri
        name
        databaseId
        products {
          nodes {
            image {
              sourceUrl
            }
            ... on WpSimpleProduct {
              name
              price
              uri
            }
          }
        }
      }
    }
  }
`

const allCategories = []

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
  const fetchCategories = async () =>
    /**
     * Fetch posts using the GET_POSTS query and the variables passed in.
     */
    await graphql(GET_PRODUCT_CATEGORIES).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpProductCategory: { nodes },
      } = data

      nodes &&
        nodes.map((category) => {
          allCategories.push(category)
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
      return allCategories
    })

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts.
   */
  await fetchCategories().then((wpCategories) => {
    wpCategories &&
      wpCategories.map((category) => {
        /**
         * Build post path based of theme blogURI setting.
         */
        const path = `store${category.uri}`

        createPage({
          path: path,
          component: categoryTemplate,
          context: {
            category: category,
            databaseId: category.databaseId,
          },
        })

        reporter.info(`product category created:  ${category.uri}`)
      })

    reporter.info(`# -----> PRODUCT CATEGORIES TOTAL: ${wpCategories.length}`)
  })
}
