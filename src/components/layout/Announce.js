/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button } from '@theme-ui/components'

/**
 * @param {Object} props
 */
const Announce = (props) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.white',
        py: '1rem',
        padding: '1rem',
        bg: 'neutral.black',
        display: 'flex',
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
        Annual 2021 Hackathon - Nigeria
      </p>
      <Button variant="rounded">Register Now </Button>
    </div>
  )
}

export default Announce
