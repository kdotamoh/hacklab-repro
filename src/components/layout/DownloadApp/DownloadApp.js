/** @jsxImportSource theme-ui */
import * as React from 'react'

import DownloadBadge from '../../svg/DownloadBadge'

const DownloadApp = ({
  heading,
  subtitle,
  image,
  appStoreLink,
  playStoreLink,
  ...props
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        // gridTemplateColumns: '50% 50%',
        pt: '12.5rem',
      }}
    >
      <div
        sx={{
          bg: 'information.border',
          position: 'relative',
          minHeight: '16rem',
          width: ['100%', '100%', '50%'],
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
          src={image?.sourceUrl}
          alt=""
        />
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: ['2rem', '2rem', '5rem'],
          px: ['1rem', '1rem', '5rem'],
          bg: 'neutral.backgroundPressed',
          width: ['100%', '100%', '50%'],
        }}
      >
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        <p
          sx={{
            fontSize: 'paragraph2',
            py: '1.5rem',
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div
          sx={{
            display: 'flex',
            gap: '.5rem',
          }}
        >
          <a href={playStoreLink} target="_blank" rel="noreferrer">
            <DownloadBadge
              appStore="google"
              sx={{
                width: '10rem',
              }}
            />
          </a>
          <a href={appStoreLink} target="_blank" rel="noreferrer">
            <DownloadBadge
              appStore="apple"
              sx={{
                width: ['10rem'],
              }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
