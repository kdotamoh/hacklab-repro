const productTemplate = require.resolve('../src/templates/product')

// gatsby-node does not have access to fragments, meaning it's not possible to simply use the PageInformation
// fragment here. There are ways around this (https://github.com/gatsbyjs/gatsby/discussions/12155#discussioncomment-100921)
// but since we don't use fragment a ton this seems like overkill. For now, just remember to keep this file in track with the
// any changes made to ProductInformation
const GET_PRODUCTS = `
  query GET_PRODUCTS {
    allWpProduct {
      nodes {
        databaseId
        name
        slug
        attributes {
          nodes {
            label
            name
            options
            position
          }
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        localAttributes {
          nodes {
            name
          }
        }
        description
        shortDescription
        purchasable
        ... on WpSimpleProduct {
          name
          price
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          crossSell {
            nodes {
              slug
              ... on WpSimpleProduct {
                name
                price
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
          upsell {
            nodes {
              slug
              ... on WpSimpleProduct {
                name
                price
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const allProducts = []

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
  const fetchProducts = async () =>
    /**
     * Fetch posts using the GET_POSTS query and the variables passed in.
     */
    await graphql(GET_PRODUCTS).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpProduct: { nodes },
      } = data

      nodes &&
        nodes.map((product) => {
          allProducts.push(product)
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
      return allProducts
    })

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual posts.
   */
  await fetchProducts().then((wpProducts) => {
    wpProducts &&
      wpProducts.map((product) => {
        /**
         * Build post path based of theme blogURI setting.
         */
        const path = `store${product.uri}`

        createPage({
          path: path,
          component: productTemplate,
          context: {
            product: product,
            databaseId: product.databaseId,
          },
        })

        reporter.info(`product created:  ${product.uri}`)
      })

    reporter.info(`# -----> PRODUCTS TOTAL: ${wpProducts.length}`)
  })
}
