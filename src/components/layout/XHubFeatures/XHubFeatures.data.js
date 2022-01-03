const xhubFeaturesLayout = `
  ... on WpPage_Pagebuilder_Layouts_Xhubfeatures {
    fieldGroupName
    image {
      sourceUrl
    }
    features {
      link
      linkText
      text
      pageLink {
        ... on WpPage {
          id
          uri
        }
      }
    }
  }
`

module.exports.xhubFeaturesLayout = xhubFeaturesLayout
