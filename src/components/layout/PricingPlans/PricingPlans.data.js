const pricingLayout = `
  ... on WpPage_Pagebuilder_Layouts_PricingPlans {
    backgroundColor
    fieldGroupName
    text
    plan {
      description
      label
      price
      features {
        icon {
          sourceUrl
        }
        text
      }
      button {
        buttonText
        buttonVariant
        linkUrl
      }
    }
  }
`

module.exports.pricingLayout = pricingLayout
