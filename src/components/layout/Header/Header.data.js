const headerLayout = `
    ... on WpPage_Pagebuilder_Layouts_Header {
      fieldGroupName
      heading
      subtitle
      textColor
      textAlignment
      backgroundColor
      backgroundImage {
        sourceUrl
      }
      buttons {
        buttonText
        buttonVariant
        linkUrl
      }
    }
  `

module.exports.headerLayout = headerLayout
