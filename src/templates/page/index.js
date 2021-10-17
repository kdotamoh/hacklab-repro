/** @jsxImportSource theme-ui */
import * as React from 'react'

import Layout from '../../components/Layout'
import RenderLayout from '../../components/RenderLayout'

/**
 * @param {Object} props
 * @param {Object} props.pageContext
 * @param {Object} props.pageContext.page
 * @param {string} props.pageContext.page.content
 * @param {string} props.pageContext.page.title
 * @param {Object} props.pageContext.page.pageBuilder
 */
const Page = ({ pageContext }) => {
  const {
    page: { title, pageBuilder },
  } = pageContext

  const layouts = pageBuilder.layouts || []

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
