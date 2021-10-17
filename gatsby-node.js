const createPages = require('./create/createPages')

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  await createPages({ actions, graphql, reporter }, options)
}
