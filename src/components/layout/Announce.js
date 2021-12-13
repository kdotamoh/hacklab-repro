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

  // TODO: improve this implementation
  const [hide, setHide] = React.useState('false')

  React.useEffect(() => {
    const hideAnnounce = sessionStorage.getItem('hide_hacklab_announce')
    setHide(hideAnnounce)
  }, [])

  const dismissAnnounce = () => {
    setHide('true')
    sessionStorage.setItem('hide_hacklab_announce', 'true')
  }

  return (
    <>
      {/* {!hide && ( */}
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
          position: 'relative',
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

        {/* <span
          sx={{
            display: 'inline-flex',
            position: 'absolute',
            right: '4rem',
            cursor: 'pointer',
          }}
          onClick={() => dismissAnnounce()}
        >
          &times;
        </span> */}
      </div>
      {/* )} */}
    </>
  )
}

export default Announce
