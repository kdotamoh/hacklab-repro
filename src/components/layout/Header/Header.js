/** @jsxImportSource theme-ui */
import * as React from 'react'
import Navigation from '../Navigation'
import { Button, Container } from 'theme-ui'

import DownloadBadge from '../../svg/DownloadBadge'

// @ts-ignore
import { Link } from 'gatsby'

/**
 * @param {Object} props
 */
const Header = ({
  textColor,
  textAlignment,
  backgroundColor,
  backgroundImage,
  buttons,
  headerText,
  appStoreLink,
  playStoreLink,
  fullHeight,
  navigation: { inHeader, textColor: navigationColor, themeColor },
  headerImage: { position, image },
  pageContext: {
    page: { isFrontPage },
  },
  ...props
}) => {
  return (
    <>
      {!inHeader && (
        <Navigation
          sx={{
            gridArea: 'navigation',
          }}
          color={navigationColor}
          themeColor={themeColor}
        />
      )}
      <div
        {...props}
        sx={{
          ...(fullHeight && { height: '92vh' }),
          color: `neutral.${textColor}`,
          ...(backgroundImage && {
            backgroundImage: `url(${backgroundImage.sourceUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }),
          backgroundColor: backgroundColor ? backgroundColor : 'neutral.white',
          display: 'grid',
          gridTemplateAreas: `'navigation'
                            'body'`,
          gridTemplateRows: 'max-content 1fr',
          position: 'relative',
        }}
      >
        {inHeader && (
          <Navigation
            sx={{
              gridArea: 'navigation',
            }}
            color={navigationColor}
            themeColor={themeColor}
          />
        )}

        <Container
          sx={{
            ...(fullHeight && { transform: 'translateY(-5rem)' }),
            alignSelf: 'center',
            gridArea: 'body',
            alignItems: 'center',
            width: ['92%', '92%', '82%'],
            py: '5rem',
            ...(image && {
              display: 'grid',
              gap: '4rem 7rem',
              ...(image &&
                position === 'right' && { gridTemplateColumns: '50% 1fr' }),
              gridTemplateAreas:
                position === 'bottom'
                  ? `"content"
                    "image"`
                  : position === 'right'
                  ? `"content image"`
                  : ``,
            }),
          }}
        >
          <div
            sx={{
              textAlign: textAlignment,
              gridArea: 'content',
            }}
          >
            <div
              sx={{
                h1: {
                  fontSize: isFrontPage ? 'display2' : 'h1',
                },
                p: {
                  pt: '1.5rem',
                  lineHeight: 'h3',
                },
              }}
              dangerouslySetInnerHTML={{ __html: headerText }}
            />
            {buttons && (
              <div
                sx={{
                  display: 'flex',
                  gap: '.75rem',
                  justifyContent: textAlignment,
                  mt: '2rem',
                }}
              >
                {playStoreLink && (
                  <DownloadBadge
                    // @ts-ignore
                    onClick={() => window.open(playStoreLink)}
                    appStore="google"
                    width="10rem"
                  />
                )}
                {appStoreLink && (
                  <DownloadBadge
                    // @ts-ignore
                    onClick={() => window.open(playStoreLink)}
                    appStore="apple"
                    width="10rem"
                  />
                )}
                {buttons.map((button, index) => (
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    key={index}
                    to={button.linkUrl}
                  >
                    <Button
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                      }}
                      variant={button.buttonVariant}
                    >
                      {button.buttonIcon && (
                        <img
                          sx={{
                            height: '1.25rem',
                            width: '1.25rem',
                            mr: '.5rem',
                          }}
                          src={button.buttonIcon.sourceUrl}
                          alt=""
                        />
                      )}
                      <span>{button.buttonText}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {image && (
            <img
              sx={{
                width: '100%',
                gridArea: 'image',
              }}
              src={image?.sourceUrl}
              alt=""
            />
          )}
        </Container>
      </div>
    </>
  )
}

export default Header
