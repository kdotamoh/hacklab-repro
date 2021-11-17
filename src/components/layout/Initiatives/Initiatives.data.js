const initiativesLayout = `
    ... on WpPage_Pagebuilder_Layouts_Initiatives {
      fieldGroupName
      heading
      subtitle
      items {
        heading
        link
        linkText
        subtitle
        color
        logo {
          sourceUrl
        }
      }
    }
  `

module.exports.initiativesLayout = initiativesLayout
