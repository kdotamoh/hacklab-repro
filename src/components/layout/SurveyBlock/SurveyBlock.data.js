const surveyLayout = `
  ... on WpPage_Pagebuilder_Layouts_Surveyblock {
    buttonText
    buttonVariant
    fieldGroupName
    linkUrl
    text
    image {
      sourceUrl
    }
  }
`

module.exports.surveyLayout = surveyLayout
