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
      },
      type: {
        MediaItem: {
          localFile: {
            excludeByMimeTypes: [`application/pdf`],
            requestConcurrency: 200,
          },
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.svg',
      },
    },
  ],
}
