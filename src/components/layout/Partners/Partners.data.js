const partnersLayout = `
    ... on WpPage_Pagebuilder_Layouts_Partners {
      fieldGroupName
      text
      partnerLogos {
        logo {
          sourceUrl
        }
      }
    }
  `

module.exports.partnersLayout = partnersLayout
