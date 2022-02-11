/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { NavigationContext } from '../../context/Navigation'
import Logo from '../svg/Logo'
import Hamburger from '../svg/Hamburger'
import Chevron from '../svg/Chevron'

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {string} [props.logoUrl]
 * @param {string} [props.themeColor]
 * @param {any} [props.sx]
 */
const Navigation = (props) => {
  const [, setShowSidenav] = React.useContext(NavigationContext)
  const [activeMenu, setActiveMenu] = React.useState(null)

  const handleMouseEnter = (label) => {
    setActiveMenu(label)
  }
  const handleMouseLeave = () => {
    setActiveMenu('')
  }

  const { wpMenu, navButton } = useStaticQuery(graphql`
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
      navButton: wpPage(slug: { eq: "admin-page" }) {
        admin {
          navigation {
            buttonLink
            buttonText
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
          position: 'relative',
        }}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 'gap-2x',
          }}
        >
          <Link
            sx={{
              width: '7.5rem',
            }}
            to="/"
          >
            {props.logoUrl ? (
              <img
                src={props.logoUrl}
                alt=""
                sx={{
                  mr: '.5rem',
                  height: '1.875rem',
                }}
              />
            ) : (
              <Logo
                width="7.5rem"
                fill={props.themeColor ? props.themeColor : '#610B70'}
                sx={{
                  mr: '.5rem',
                }}
              />
            )}
          </Link>
          <div
            sx={{
              display: ['none', 'none', 'flex'],
              gap: '2rem',
            }}
          >
            {
              // @ts-ignore
              hierarchicalList.map((menuItem, index) => (
                <div
                  key={menuItem.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Link
                    sx={{
                      fontSize: 'paragraph2',
                      fontWeight: 'medium',
                      color: props.color,
                      textDecoration: 'none',
                    }}
                    to={menuItem.path}
                  >
                    {menuItem.label}
                    {menuItem.children.length > 0 && (
                      <span
                        sx={{
                          ml: '.5rem',
                        }}
                      >
                        <Chevron
                          width=".6rem"
                          stroke={props.color}
                          orientation="down"
                        />
                      </span>
                    )}
                  </Link>
                  {menuItem.children.length > 0 && (
                    <div
                      sx={{
                        position: 'absolute',
                        top: '4rem',
                        py: '1rem',
                        px: '1.5rem',
                        borderRadius: 'sm',
                        width: ['92%', '92%', 'max-content'],
                        display: activeMenu === index ? 'flex' : 'none',
                        flexDirection: 'column',
                        bg: 'neutral.white',
                        color: 'neutral.black',
                        zIndex: '999',
                        border: (t) => `solid 1px ${t.colors.neutral.border}`,
                        boxShadow:
                          '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
                      }}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <>
                        <p
                          sx={{
                            fontSize: '.8rem',
                            color: 'primary',
                            fontWeight: 'medium',
                            textAlign: 'left',
                            pb: '.5rem',
                          }}
                        >
                          {menuItem.label}
                        </p>
                        {menuItem.children.map((subMenuItem) => (
                          <Link
                            sx={{
                              fontSize: 'paragraph2',
                              textAlign: 'left',
                              fontWeight: 'medium',
                              py: '.5rem',
                              color: 'neutral.black',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'primary',
                              },
                            }}
                            key={subMenuItem.id}
                            to={subMenuItem.path}
                          >
                            {subMenuItem.label}
                          </Link>
                        ))}
                      </>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>
        <a
          sx={{
            textDecoration: 'none',
          }}
          href={navButton.admin.navigation.buttonLink}
          target="_blank"
          rel="noreferrer"
        >
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
            {navButton.admin.navigation.buttonText}
          </Button>
        </a>
        <div
          sx={{
            display: ['block', 'block', 'none'],
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
