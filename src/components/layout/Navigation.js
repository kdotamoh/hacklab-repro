/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { NavigationContext } from '../../context/Navigation'
import Logo from '../svg/Logo'
import Hamburger from '../svg/Hamburger'

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {string} [props.themeColor]
 * @param {any} [props.sx]
 */
const Navigation = (props) => {
  const [showSideNav, setShowSidenav] = React.useContext(NavigationContext)

  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-navigation" }) {
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

  const hierarchicalList = flatListToHierarchical(wpMenu.menuItems.nodes)

  return (
    <>
      <Container
        as="nav"
        {...props}
        sx={{
          ...props.sx,
          py: '1rem',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 'gap-2x',
          }}
        >
          <Link to="/">
            <Logo
              width="7.5rem"
              fill={props.themeColor ? props.themeColor : '#610B70'}
              sx={{
                mr: '.5rem',
              }}
            />
          </Link>
          <div
            sx={{
              display: ['none', 'none', 'flex'],
              gap: '2rem',
            }}
          >
            {
              // @ts-ignore
              hierarchicalList.map((menuItem) => (
                <Link
                  sx={{
                    fontSize: 'paragraph2',
                    fontWeight: 'medium',
                    color: props.color,
                    textDecoration: 'none',
                  }}
                  key={menuItem.id}
                  to={menuItem.path}
                >
                  {menuItem.label}
                </Link>
              ))
            }
          </div>
        </div>
        <a href="https://connect.hacklabgh.org/">
          <Button
            sx={{
              fontSize: 'paragraph2',
              display: ['none', 'none', 'block'],
              bg:
                props.themeColor === '#ffffff'
                  ? 'primary'
                  : props.themeColor === '#FFFFFF'
                  ? 'primary'
                  : props.themeColor === null
                  ? 'primary'
                  : props.themeColor === undefined
                  ? 'primary'
                  : props.themeColor,
            }}
          >
            Connect
          </Button>
        </a>
        <div
          sx={{
            display: ['block', 'none', 'none'],
          }}
          onClick={() => {
            setShowSidenav(true)
          }}
        >
          <Hamburger
            fill={props.themeColor ? props.themeColor : '#610B70'}
            sx={{
              height: '2rem',
              display: ['block', 'block', 'none'],
            }}
          />
        </div>
      </Container>
    </>
  )
}

export default Navigation
