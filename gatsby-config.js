require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.GATSBY_SERVER_ADDRESS}`,
    title: 'Hacklab Foundation Website',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: `${process.env.GATSBY_SERVER_ADDRESS}/graphql`,
        schema: {
          timeout: 30000,
          perPage: 500,
          requestConcurrency: 5,
        },
      },
      develop: { hardCacheMediaFiles: true },
      type: {
        MediaItem: {
          ...(process.env.NODE_ENV === 'development' && {
            localFile: {
              maxFileSizeBytes: 0,
              excludeByMimeTypes: [
                `application/pdf`,
                `image/jpeg`,
                `image/png`,
                `image/svg+xml`,
              ],
            },
          }),
          requestConcurrency: 200,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
  ],
}
