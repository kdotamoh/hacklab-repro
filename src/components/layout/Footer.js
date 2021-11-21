/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

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
  const { legalMenu, footerMenu, contact } = useStaticQuery(graphql`
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
      contact: wpPage(slug: { eq: "admin-page" }) {
        admin {
          contact {
            item
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

  /**
   * variables
   */
  const currentYear = new Date().getFullYear()

  return (
    <Container
      sx={{
        width: ['92%', '92%', '82%'],
      }}
      as="footer"
      {...props}
    >
      <div
        sx={{
          // display: 'flex',
          display: 'grid',
          gridTemplateColumns: [
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ],
          rowGap: '2rem',

          justifyContent: 'space-between',
          borderBottom: (theme) => `1px solid ${theme.colors?.muted}`,
          borderTop: (theme) => `1px solid ${theme.colors?.muted}`,
          pt: '4rem',
          // paddingRight: ['0', '0', '2rem'],
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
                  <Link
                    to={childItem.path}
                    sx={{
                      fontSize: 'paragraph2',
                      color: 'neutral.textDisabled',
                      textDecoration: 'none',
                    }}
                    key={children.id}
                  >
                    {childItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
          }}
        >
          <p
            sx={{
              fontSize: 'paragraph2',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </p>
          {contact?.admin?.contact?.length > 0 && (
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '.75rem',
              }}
            >
              {contact?.admin?.contact?.map((item, index) => (
                <p
                  sx={{
                    fontSize: 'paragraph2',
                    color: 'neutral.textDisabled',
                    textDecoration: 'none',
                    lineHeight: 'paragraph2',
                  }}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.item }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          rowGap: '2.5rem',
          alignItems: ['flex-start', 'flex-start', 'center'],
          pb: '3.5rem',
          pt: '2rem',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: ['flex-start', 'flex-start', 'center'],
            gap: '0 2.5rem',
          }}
        >
          <Logo width="7.5rem" fill="#610b70" />
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
              <Link
                to={menuItem.path}
                sx={{
                  fontSize: 'paragraph2',
                  textDecoration: 'none',
                  color: 'neutral.black',
                }}
                key={menuItem.id}
              >
                {menuItem.label}
              </Link>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Footer
