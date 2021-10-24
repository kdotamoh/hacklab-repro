const ratingsLayout = `
  ... on WpPage_Pagebuilder_Layouts_Ratingsblock {
    fieldGroupName
    image {
      sourceUrl
    }
    ratings {
      avatar {
        sourceUrl
      }
      name
      role
      stars
      text
    }
  }
`

module.exports.ratingsLayout = ratingsLayout
