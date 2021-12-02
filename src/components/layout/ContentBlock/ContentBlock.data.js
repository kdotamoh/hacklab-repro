const contentBlockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Contentblock {
    textPosition
    content
    imageFit
    fieldGroupName
    buttons {
      buttonText
      buttonVariant
      outbound
      linkUrl
    }
    image {
      sourceUrl
    }
  }
`

module.exports.contentBlockLayout = contentBlockLayout
