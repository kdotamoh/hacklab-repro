const ctaLayout = `
  ... on WpPage_Pagebuilder_Layouts_Ctablock {
    backgroundColor
    fieldGroupName
    text
    button {
      buttonAlignment
      buttonText
      outbound
      buttonVariant
      linkUrl
    }
    items {
      text
    }
  }
`

module.exports.ctaLayout = ctaLayout
