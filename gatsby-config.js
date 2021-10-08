require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.SERVER_ADDRESS}`,
    title: 'Hacklab Foundation Website',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: `${process.env.SERVER_ADDRESS}/graphql`,
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
}
