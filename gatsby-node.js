const webpack = require('webpack')

const createPages = require('./create/createPages')
const createPosts = require('./create/createPosts')
const createProducts = require('./create/createProducts')
const createProductCategories = require('./create/createProductCategories')

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
  await createProducts({ actions, graphql, reporter }, options)
  await createProductCategories({ actions, graphql, reporter }, options)
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      extensions: ['.ts', '.js'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
  })
}
