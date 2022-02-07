/** @jsxImportSource theme-ui */
import * as React from 'react'
import Loadable from '@loadable/component'

const Impact = Loadable(() => import('./layout/Impact'))
const Header = Loadable(() => import('./layout/Header'))
const Partners = Loadable(() => import('./layout/Partners'))
const Initiatives = Loadable(() => import('./layout/Initiatives'))
const Reviews = Loadable(() => import('./layout/Reviews'))
const DownloadApp = Loadable(() => import('./layout/DownloadApp'))
const Team = Loadable(() => import('./layout/Team'))
const TextBlock = Loadable(() => import('./layout/TextBlock'))
const RatingsBlock = Loadable(() => import('./layout/RatingsBlock'))
const CTABlock = Loadable(() => import('./layout/CTABlock'))
const PricingPlans = Loadable(() => import('./layout/PricingPlans'))
const Cards = Loadable(() => import('./layout/Cards'))
const StepBlock = Loadable(() => import('./layout/StepBlock'))
const Testimonials = Loadable(() => import('./layout/Testimonials'))
const Newsletter = Loadable(() => import('./layout/Newsletter'))
const Donationblock = Loadable(() => import('./layout/Donationblock'))
const WardRegistration = Loadable(() => import('./layout/WardRegistration'))
const Linkblock = Loadable(() => import('./layout/Linkblock'))
const XHubFeatures = Loadable(() => import('./layout/XHubFeatures'))
const Reportsblock = Loadable(() => import('./layout/Reportsblock'))
const Surveyblock = Loadable(() => import('./layout/Surveyblock'))
const XHubBenefits = Loadable(() => import('./layout/XHubBenefits'))
const ContentBlock = Loadable(() => import('./layout/ContentBlock'))

/**
 *
 * @param {Object} props
 * @param {string} props.componentType
 * @param {Object} props.componentData
 * @param {Object} props.pageContext
 */
const RenderLayout = ({ componentData, componentType, pageContext }) => {
  const Default = () => (
    <div>
      In AllLayouts the mapping of this component is missing: {componentType}
    </div>
  )

  const components = {
    Page_Pagebuilder_Layouts_Header: Header,
    Page_Pagebuilder_Layouts_Impact: Impact,
    Page_Pagebuilder_Layouts_Partners: Partners,
    Page_Pagebuilder_Layouts_Initiatives: Initiatives,
    Page_Pagebuilder_Layouts_Reviews: Reviews,
    Page_Pagebuilder_Layouts_DownloadApp: DownloadApp,
    Page_Pagebuilder_Layouts_Team: Team,
    Page_Pagebuilder_Layouts_Textblock: TextBlock,
    Page_Pagebuilder_Layouts_Contentblock: ContentBlock,
    Page_Pagebuilder_Layouts_Ratingsblock: RatingsBlock,
    Page_Pagebuilder_Layouts_Ctablock: CTABlock,
    Page_Pagebuilder_Layouts_PricingPlans: PricingPlans,
    Page_Pagebuilder_Layouts_Cards: Cards,
    Page_Pagebuilder_Layouts_Stepblock: StepBlock,
    Page_Pagebuilder_Layouts_Testimonialblock: Testimonials,
    Page_Pagebuilder_Layouts_Newsletter: Newsletter,
    Page_Pagebuilder_Layouts_Donationblock: Donationblock,
    Page_Pagebuilder_Layouts_Wardregistration: WardRegistration,
    Page_Pagebuilder_Layouts_Linkblock: Linkblock,
    Page_Pagebuilder_Layouts_Xhubfeatures: XHubFeatures,
    Page_Pagebuilder_Layouts_Xhubbenefits: XHubBenefits,
    Page_Pagebuilder_Layouts_Reportsblock: Reportsblock,
    Page_Pagebuilder_Layouts_Surveyblock: Surveyblock,
    Page_default: Default,
  }

  /**
   *
   * @param {string} componentType
   * @param {Object} componentData
   */
  const mappedData = (componentType, componentData) => {
    switch (componentType) {
      default:
        return componentData
    }
  }

  const ComponentName = components[componentType]
    ? components[componentType]
    : components['page_default']

  return (
    <ComponentName
      {...mappedData(componentType, componentData)}
      {...{ pageContext }}
    />
  )
}

export default RenderLayout
