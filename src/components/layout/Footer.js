/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import Logo from '../svg/Logo'

/**
 * @param {Object} props
 */
const Footer = (props) => {
  /**
   * @typedef LegalMenuData
   * @prop {Object} menuItems
   * @prop {Object[]} menuItems.nodes
   * @prop {string} menuItems.nodes[].id
   * @prop {string} menuItems.nodes[].label
   * @prop {string} menuItems.nodes[].path
   * @prop {string} [menuItems.nodes[].title]
   */

  /**
   * @param {LegalMenuData} legalMenu
   */
  const { legalMenu, footerMenu } = useStaticQuery(graphql`
    {
      footerMenu: wpMenu(slug: { eq: "footer-navigation" }) {
        menuItems {
          nodes {
            id
            label
            path
            parentId
            title
          }
        }
      }
      legalMenu: wpMenu(slug: { eq: "legal" }) {
        menuItems {
          nodes {
            id
            label
            path
            title
          }
        }
      }
    }
  `)

  /**
   * @param {Object[]} data
   */
  const flatListToHierarchical = (
    data = [],
    { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
  ) => {
    /** @type {Object[]} */
    const tree = []
    const childrenOf = {}
    data.forEach((item) => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }

  const hierarchicalList = flatListToHierarchical(footerMenu.menuItems.nodes)
  console.log(hierarchicalList)

  /**
   * variables
   */
  const currentYear = new Date().getFullYear()

  return (
    <Container as="footer" {...props}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: (theme) => `1px solid ${theme.colors?.muted}`,
          borderTop: (theme) => `1px solid ${theme.colors?.muted}`,
          pt: '4rem',
          paddingRight: '20%',
          pb: '4.75rem',
        }}
      >
        {hierarchicalList.map(({ children, ...parentItem }) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '1rem',
            }}
            key={parentItem.id}
          >
            <p
              sx={{
                fontSize: 'paragraph2',
                fontWeight: 'bold',
              }}
            >
              {parentItem.label}
            </p>
            {children.length > 0 && (
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '.75rem',
                }}
              >
                {children.map((childItem) => (
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      color: 'neutral.textDisabled',
                    }}
                    key={children.id}
                  >
                    {childItem.label}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: '3.5rem',
          pt: '2rem',
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          <Logo width="7.5rem" />
          <p
            sx={{
              fontSize: 'paragraph2',
            }}
          >
            © {currentYear} Hacklab. All rights reserved.
          </p>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '1.25rem',
          }}
        >
          {
            // @ts-ignore
            legalMenu.menuItems.nodes.map((menuItem) => (
              <p
                sx={{
                  fontSize: 'paragraph2',
                }}
                key={menuItem.id}
              >
                {menuItem.label}
              </p>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Footer