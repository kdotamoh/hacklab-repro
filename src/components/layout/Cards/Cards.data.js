const cardsLayout = `
  ... on WpPage_Pagebuilder_Layouts_Cards {
    fieldGroupName
    text
    card {
      image {
        sourceUrl
      }
      text
    }
  }
`

module.exports.cardsLayout = cardsLayout
