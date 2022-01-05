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
      image {
        sourceUrl
      }
    }
  }
`

module.exports.reportsBlockLayout = reportsBlockLayout
