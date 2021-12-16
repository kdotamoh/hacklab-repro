const contentBlockLayout = `
  ... on WpPage_Pagebuilder_Layouts_Contentblock {
    textPosition
    content
    imageFit
    fieldGroupName
    buttons {
      buttonText
      buttonVariant
      outbound
      linkUrl
    }
    image {
      sourceUrl
    }
    youtubeVideo {
      thumbnail {
        sourceUrl
      }
      videoId
    }
  }
`

module.exports.contentBlockLayout = contentBlockLayout
