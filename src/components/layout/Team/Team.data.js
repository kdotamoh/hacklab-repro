const teamLayout = `
  ... on WpPage_Pagebuilder_Layouts_Team {
    fieldGroupName
    heading
    items {
      avatar {
        sourceUrl
      }
      name
      role
      social {
        icon {
          sourceUrl
        }
        linkUrl
      }
    }
  }
`

module.exports.teamLayout = teamLayout
