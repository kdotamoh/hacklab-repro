const pageTemplate = require.resolve('../src/templates/page')
const {
  impactLayout,
} = require('../src/components/layout/Impact/Impact.data.js')
const {
  partnersLayout,
} = require('../src/components/layout/Partners/Partners.data.js')
const {
  headerLayout,
} = require('../src/components/layout/Header/Header.data.js')
const {
  initiativesLayout,
} = require('../src/components/layout/Initiatives/Initiatives.data.js')
const {
  reviewsLayout,
} = require('../src/components/layout/Reviews/Reviews.data.js')
const {
  downloadLayout,
} = require('../src/components/layout/DownloadApp/DownloadApp.data.js')
const { teamLayout } = require('../src/components/layout/Team/Team.data.js')
const {
  textBlockLayout,
} = require('../src/components/layout/TextBlock/TextBlock.data.js')
const {
  contentBlockLayout,
} = require('../src/components/layout/ContentBlock/ContentBlock.data.js')
const {
  ratingsLayout,
} = require('../src/components/layout/RatingsBlock/RatingsBlock.data.js')
const {
  ctaLayout,
} = require('../src/components/layout/CTABlock/CTABlock.data.js')
const {
  pricingLayout,
} = require('../src/components/layout/PricingPlans/PricingPlans.data')
const { cardsLayout } = require('../src/components/layout/Cards/Cards.data.js')
const {
  testimonialsLayout,
} = require('../src/components/layout/Testimonials/Testimonials.data.js')
const {
  stepblockLayout,
} = require('../src/components/layout/Stepblock/Stepblock.data.js')
const {
  newsletterLayout,
} = require('../src/components/layout/Newsletter/Newsletter.data.js')
const {
  donationBlockLayout,
} = require('../src/components/layout/Donationblock/Donationblock.data.js')
const {
  wardRegistrationLayout,
} = require('../src/components/layout/WardRegistration/WardResgistration.data.js')
const {
  linkblockLayout,
} = require('../src/components/layout/Linkblock/Linkblock.data.js')
const {
  xhubFeaturesLayout,
} = require('../src/components/layout/XHubFeatures/XHubFeatures.data.js')

const GET_PAGES = `
  query GET_PAGES {
    allWpPage {
      nodes {
        title
        uri
        isFrontPage
        pageBuilder {
          layouts {
            ${headerLayout}
            ${impactLayout}
            ${partnersLayout}
            ${initiativesLayout}
            ${reviewsLayout}
            ${downloadLayout}
            ${teamLayout}
            ${textBlockLayout}
            ${contentBlockLayout}
            ${ratingsLayout}
            ${ctaLayout}
            ${pricingLayout}
            ${cardsLayout}
            ${testimonialsLayout}
            ${stepblockLayout}
            ${newsletterLayout}
            ${donationBlockLayout}
            ${wardRegistrationLayout}
            ${linkblockLayout}
            ${xhubFeaturesLayout}
          }
        }
      }
    }
  }
`

const allPages = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions
  /**
   * Fetch pages method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPages = async () =>
    /**
     * Fetch pages using the GET_PAGES query and the variables passed in.
     */
    await graphql(GET_PAGES).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpPage: { nodes },
      } = data

      /**
       * Map over the pages for later creation
       */
      nodes &&
        nodes.map((pages) => {
          allPages.push(pages)
        })
      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      // if (hasNextPage) {
      //   pageNumber++
      //   reporter.info(`fetch page ${pageNumber} of pages...`)
      //   return fetchPages({ first: itemsPerPage, after: endCursor })
      // }

      /**
       * Once we're done, return all the pages
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPages
    })

  /**
   * Kick off our `fetchPages` method which will get us all
   * the pages we need to create individual pages.
   */
  await fetchPages().then((wpPages) => {
    wpPages &&
      wpPages.map((page) => {
        let pagePath = `${page.uri}`

        /**
         * If the page is the front page, the page path should not be the uri,
         * but the root path '/'.
         */
        if (page.isFrontPage) {
          pagePath = '/'
        }

        createPage({
          path: pagePath,
          component: pageTemplate,
          context: {
            page: page,
          },
        })

        reporter.info(`page created: ${page.uri}`)
      })

    reporter.info(`# -----> PAGES TOTAL: ${wpPages.length}`)
  })
}
