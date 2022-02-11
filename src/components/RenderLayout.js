/** @jsxImportSource theme-ui */
import * as React from 'react'
import Loadable from '@loadable/component'

import Impact from './layout/Impact'
import Header from './layout/Header'
import Partners from './layout/Partners'
import Initiatives from './layout/Initiatives'
import Reviews from './layout/Reviews'
import DownloadApp from './layout/DownloadApp'
import Team from './layout/Team'
import TextBlock from './layout/TextBlock'
import RatingsBlock from './layout/RatingsBlock'
import CTABlock from './layout/CTABlock'
import PricingPlans from './layout/PricingPlans'
import Cards from './layout/Cards'
import StepBlock from './layout/Stepblock'
import Testimonials from './layout/Testimonials'
import Newsletter from './layout/Newsletter'
import Donationblock from './layout/Donationblock'
import WardRegistration from './layout/WardRegistration'
import Linkblock from './layout/Linkblock'
import XHubFeatures from './layout/XHubFeatures'
import Reportsblock from './layout/Reportsblock'
import Surveyblock from './layout/SurveyBlock'
import XHubBenefits from './layout/XHubBenefits'

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
