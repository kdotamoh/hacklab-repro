const reportsBlockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Reportsblock {
    fieldGroupName
    items {
      download {
        mediaItemUrl
        sourceUrl
      }
      label
      link
    }
  }
`

module.exports.reportsBlockLayout = reportsBlockLayout
