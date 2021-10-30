const testimonialsLayout = `
  ... on WpPage_Pagebuilder_Layouts_Testimonialblock {
    fieldGroupName
    testimonials {
      image {
        sourceUrl
      }
      name
      role
      text
    }
  }
`

module.exports.testimonialsLayout = testimonialsLayout
