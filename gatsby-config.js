module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Hacklab Foundation Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.SERVER_ADDRESS}/graphql`,
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
