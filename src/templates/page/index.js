/** @jsxImportSource theme-ui */
import * as React from 'react'

import Layout from '../../components/Layout'
import RenderLayout from '../../components/RenderLayout'
import { NavigationContext } from '../../context/Navigation'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 * @param {Object[]} props.pageContext.page.pageBuilder.layouts
 */
const Page = ({ pageContext }) => {
  const {
    page: { pageBuilder },
  } = pageContext

  const layouts = pageBuilder.layouts || []

  const [, setShowSidenav] = React.useContext(NavigationContext)

  React.useEffect(() => {
    setShowSidenav(false)
  }, [])

  return (
    <Layout>
      {layouts.map((layout, index) => {
        return (
          <RenderLayout
            key={index}
            pageContext={pageContext}
            componentType={layout.fieldGroupName}
            componentData={layout}
          />
        )
      })}
    </Layout>
  )
}

export default Page
