/** @jsxImportSource theme-ui */
import * as React from 'react'

import Impact from './layout/Impact'
import Header from './layout/Header'
import Partners from './layout/Partners'
import Initiatives from './layout/Initiatives'
import Reviews from './layout/Reviews'
import DownloadApp from './layout/DownloadApp'
import Team from './layout/Team'
import TextBlock from './layout/TextBlock'
import ContentBlock from './layout/ContentBlock'

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
