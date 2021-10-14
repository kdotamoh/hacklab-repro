/** @jsxImportSource theme-ui */
import * as React from 'react'

import DownloadBadge from '../svg/DownloadBadge'
//@ts-ignore
import phone from '../../images/iphone.png'

const DownloadApp = () => {
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        pt: '12.5rem',
      }}
    >
      <div
        sx={{
          bg: 'information.border',
          position: 'relative',
        }}
      >
        <img
          sx={{
            position: 'absolute',
            right: '20%',
            bottom: '0',
            height: '130%',
            width: 'auto',
          }}
          src={phone}
          alt=""
        />
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: '5rem',
          bg: 'neutral.backgroundPressed',
        }}
      >
        <h2>Hacklab Connect Mobile App</h2>
        <p
          sx={{
            fontSize: 'paragraph2',
            py: '1.5rem',
          }}
        >
          Stay up to date with all Hacklab activities and events. Connect with
          members of the community, access forums and opportunities.
        </p>
        <div
          sx={{
            display: 'flex',
            gap: '.5rem',
          }}
        >
          <DownloadBadge appStore="google" width="10rem" />
          <DownloadBadge appStore="apple" width="10rem" />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
