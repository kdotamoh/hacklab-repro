const reviewsLayout = `
  ... on WpPage_Pagebuilder_Layouts_Reviews {
    fieldGroupName
    heading
    items {
      avatar {
        sourceUrl
      }
      content
      name
      role
    }
  }
`

module.exports.reviewsLayout = reviewsLayout
