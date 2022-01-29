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
        localFile {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              placeholder: BLURRED
              transformOptions: {fit: COVER}
              webpOptions: {quality: 100}
            )
          }
        }
      }
      buttons {
        buttonText
        buttonVariant
        linkUrl
        outbound
        buttonIcon {
	        sourceUrl
        }
      }
    }
  `

module.exports.headerLayout = headerLayout
