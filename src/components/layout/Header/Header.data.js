const headerLayout = `
    ... on WpPage_Pagebuilder_Layouts_Header {
      fieldGroupName
      headerText
      textColor
      textAlignment
      backgroundColor
      appStoreLink
      playStoreLink
      fullHeight
      navigation {
        logo {
          sourceUrl
        }
        inHeader
        textColor
        themeColor
      }
      headerImage {
				image {
					sourceUrl
        }
        position
      } 
      backgroundImage {
        sourceUrl
      }
      buttons {
        buttonText
        buttonVariant
        linkUrl
        buttonIcon {
	        sourceUrl
        }
      }
    }
  `

module.exports.headerLayout = headerLayout
