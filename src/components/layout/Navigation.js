/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Logo from '../svg/Logo'

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {string} [props.themeColor]
 * @param {any} [props.sx]
 */
const Navigation = (props) => {
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

  // /**
  //  * @param {Object[]} data
  //  */
  // const flatListToHierarchical = (
  //   data = [],
  //   { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
  // ) => {
  //   /** @type {Object[]} */
  //   const tree = []
  //   const childrenOf = {}
  //   data.forEach((item) => {
  //     const newItem = { ...item }
  //     const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
  //     childrenOf[id] = childrenOf[id] || []
  //     newItem[childrenKey] = childrenOf[id]
  //     parentId
  //       ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
  //       : tree.push(newItem)
  //   })
  //   return tree
  // }

  return (
    <Container
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
        {
          // @ts-ignore
          wpMenu.menuItems.nodes.map((menuItem) => (
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
      <Button
        sx={{
          fontSize: 'paragraph2',
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
    </Container>
  )
}

export default Navigation
