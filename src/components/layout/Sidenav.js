/** @jsxImportSource theme-ui */
import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

export default function Sidenav({ showSideNav, setShowSidenav }) {
  /**
   * state
   */
  const [activeMenu, setActiveMenu] = React.useState(null)

  /**
   * queries
   */
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
   * functions
   */
  const flatListToHierarchical = (
    data = [],
    { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
  ) => {
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
    <nav
      sx={{
        position: 'absolute',
        zIndex: 12,
        overflow: 'scroll',
        top: 0,
        right: 0,
        bg: 'neutral.white',
        display: showSideNav ? 'block' : 'none',
      }}
      className="sidenav__wrapper"
    >
      <div
        sx={{
          height: '100vh',
          width: '60vw',
          zIndex: 2,
          position: 'fixed',
          right: 0,
          backgroundColor: 'white',
          paddinfBottom: '30rem',
          overflowY: 'scroll',
        }}
        className="sidenav"
      >
        <span
          role="button"
          tabIndex={0}
          className="sidenav__close"
          sx={{
            display: 'block',
            fontSize: '2rem',
            paddingRight: '1rem',
            textAlign: 'right',
          }}
          onClick={() => {
            setShowSidenav(false)
            document.body.style.overflow = 'visible'
          }}
          onKeyDown={() => {
            setShowSidenav(false)
            document.body.style.overflow = 'visible'
          }}
        >
          &times;
        </span>

        {hierarchicalList.map((menuItem, index) => (
          <div role="menuitem" tabIndex={0} className="" key={index}>
            <div
              sx={{
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: (t) => `solid 1px ${t.colors?.neutral.border}`,
              }}
              className="sidenav__item"
            >
              <Link
                style={{
                  pointerEvents: menuItem.path === null ? 'none' : 'all',
                }}
                to={`${menuItem.path}`}
                className=""
                sx={{
                  textDecoration: 'none',
                  color: 'neutral.textPlaceholder',
                  fontWeight: 'medium',
                }}
                onClick={() => (document.body.style.overflow = 'visible')}
              >
                {menuItem.label}
              </Link>
              {menuItem.children.length > 0 && (
                <span
                  className="sidenav__expand-item"
                  sx={{
                    fontSize: '1.2rem',
                    color: 'black',
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    activeMenu !== index
                      ? setActiveMenu(index)
                      : setActiveMenu(null)
                  }
                  onKeyDown={() =>
                    activeMenu !== index
                      ? setActiveMenu(index)
                      : setActiveMenu(null)
                  }
                >
                  {activeMenu !== index ? <>+</> : <>&times;</>}
                </span>
              )}
            </div>
            {menuItem.children.length > 0 && activeMenu === index && (
              <div
                role="menu"
                tabIndex={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="sidenav__subitems"
              >
                {menuItem.children.map((subMenuItem) => (
                  <Link
                    sx={{
                      padding: '1rem 2.5rem',
                      textDecoration: 'none',
                      bg: 'neutral.backgroundPressed',
                      color: 'neutral.textPlaceholder',
                      fontWeight: 'medium',
                      borderBottom: (t) =>
                        `solid 1px ${t.colors?.neutral.border}`,
                    }}
                    className="sidenav__subitem text-blue"
                    key={subMenuItem.label}
                    to={`${subMenuItem.path}`}
                    onClick={() => (document.body.style.overflow = 'visible')}
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="sidenav__overlay" />
    </nav>
  )
}
