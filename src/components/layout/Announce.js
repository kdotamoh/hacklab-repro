/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button } from '@theme-ui/components'
import { graphql, useStaticQuery, navigate } from 'gatsby'

/**
 * @param {Object} props
 */
const Announce = (props) => {
  const { announce } = useStaticQuery(graphql`
    {
      announce: wpPage(slug: { eq: "admin-page" }) {
        admin {
          announce {
            buttonText
            linkUrl
            text
          }
        }
      }
    }
  `)

  return (
    <div
      {...props}
      sx={{
        color: 'neutral.white',
        py: '1rem',
        padding: '1rem',
        bg: 'neutral.black',
        display: announce?.admin?.announce?.text ? 'flex' : 'none',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        gap: 'gapDefault',
      }}
    >
      <p
        sx={{
          fontSize: 'paragraph2',
        }}
      >
        {announce?.admin?.announce?.text}
      </p>
      <Button
        onClick={() => navigate(announce?.admin?.announce?.linkUrl)}
        variant="rounded"
      >
        {announce?.admin?.announce?.buttonText}
      </Button>
    </div>
  )
}

export default Announce
