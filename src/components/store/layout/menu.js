/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { NavigationContext } from '../../../context/Navigation'
import { StoreContext } from '../../../context/Store'
import Logo from '../../svg/Logo'
import Hamburger from '../../svg/Hamburger'
import Chevron from '../../svg/Chevron'

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {string} [props.logoUrl]
 * @param {string} [props.themeColor]
 * @param {any} [props.sx]
 */
const Menu = (props) => {
  const [, setShowSidenav] = React.useContext(NavigationContext)
  const { cart } = React.useContext(StoreContext)
  const [activeMenu, setActiveMenu] = React.useState(null)

  const handleMouseEnter = (label) => {
    setActiveMenu(label)
  }
  const handleMouseLeave = () => {
    setActiveMenu('')
  }

  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "store-menu" }) {
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
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          textAlign: 'center',
          alignItems: 'center',
          width: ['92%', '92%', '82%'],
          position: 'relative',
        }}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Link
          sx={{
            width: '7.5rem',
          }}
          to="/"
        >
          <Logo
            width="7.5rem"
            fill="#610B70"
            sx={{
              mr: '.5rem',
            }}
          />
        </Link>
        <div
          sx={{
            justifySelf: 'center',
            gap: 'gap-2x',
          }}
        >
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
                      color: 'neutral.black',
                      textDecoration: 'none',
                    }}
                    to={`/store${menuItem.path}`}
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
        <div
          sx={{
            justifySelf: 'end',
            display: 'flex',
          }}
        >
          <Link to="/store/checkout">
            <Cart quantity={cart.length} />
          </Link>
          <div
            sx={{
              display: ['block', 'none', 'none'],
            }}
            onClick={() => {
              setShowSidenav(true)
            }}
          >
            <Hamburger
              fill="#610B70"
              sx={{
                height: '2rem',
                display: ['block', 'block', 'none'],
              }}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

const Cart = ({ quantity }) => {
  return (
    <div
      sx={{
        position: 'relative',
      }}
    >
      {quantity > 0 ? (
        <span
          sx={{
            display: 'inline-block',
            // height: '3rem',
            fontSize: '.6rem',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '30rem',
            px: '.3rem',
            py: '.1rem',
            bg: 'red',
            position: 'absolute',
            zIndex: '10',
            left: '.8rem',
            top: '.7rem',
          }}
        >
          {quantity}
        </span>
      ) : null}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.25 3.75H5.25L7.5 16.5H19.5"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 13.5H19.1925C19.2792 13.5001 19.3633 13.4701 19.4304 13.4151C19.4975 13.3601 19.5434 13.2836 19.5605 13.1986L20.9105 6.44859C20.9214 6.39417 20.92 6.338 20.9066 6.28414C20.8931 6.23029 20.8679 6.18009 20.8327 6.13717C20.7975 6.09426 20.7532 6.05969 20.703 6.03597C20.6528 6.01225 20.598 5.99996 20.5425 6H6"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Menu
