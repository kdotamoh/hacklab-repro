const downloadLayout = `
  ... on WpPage_Pagebuilder_Layouts_DownloadApp {
    appStoreLink
    fieldGroupName
    heading
    playStoreLink
    subtitle
    image {
      sourceUrl
    }
  }
`

module.exports.downloadLayout = downloadLayout
