const partnersLayout = `
    ... on WpPage_Pagebuilder_Layouts_Partners {
      fieldGroupName
      heading
      subtitle
      partnerLogos {
        logo {
          sourceUrl
        }
      }
    }
  `

module.exports.partnersLayout = partnersLayout
