const linkblockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Linkblock {
      fieldGroupName
      text
      items {
        image
        label
        outboundlink
        pagelink {
          ... on WpPage {
            id
            uri
          }
        }
      }
    }
  `

module.exports.linkblockLayout = linkblockLayout
