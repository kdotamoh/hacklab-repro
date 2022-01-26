const pricingLayout = `
  ... on WpPage_Pagebuilder_Layouts_PricingPlans {
    backgroundColor
    fieldGroupName
    text
    plan {
      planDetails {
        description
        label
        features {
          text
          icon {
            sourceUrl
          }
        }
      }
      options {
        label
        price
      }
      button {
        buttonText
        outbound
        buttonVariant
        linkUrl
      }
    }
  }
`

module.exports.pricingLayout = pricingLayout
