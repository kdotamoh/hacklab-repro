const contentBlockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Contentblock {
    textPosition
    content
    fieldGroupName
    buttons {
      buttonText
      buttonVariant
      linkUrl
    }
    image {
      sourceUrl
    }
  }
`

module.exports.contentBlockLayout = contentBlockLayout
