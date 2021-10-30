const stepblockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Stepblock {
    fieldGroupName
    text
    steps {
      backgroundColor
      image {
        sourceUrl
      }
      fieldGroupName
      numberColor
      text
      textPosition
    }
  }
`

module.exports.stepblockLayout = stepblockLayout
