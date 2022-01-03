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
  navigation: { inHeader, textColor: navigationColor, themeColor, logo },
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
          logoUrl={logo?.sourceUrl}
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
          minHeight: 'max-content',
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
            logoUrl={logo?.sourceUrl}
            sx={{
              gridArea: 'navigation',
            }}
            color={navigationColor}
            themeColor={themeColor}
          />
        )}

        <Container
          sx={{
            ...(isFrontPage && { transform: 'translateY(-5rem)' }),
            alignSelf: 'center',
            gridArea: 'body',
            alignItems: 'center',
            minHeight: '20rem',
            width: ['92%', '92%', '82%'],
            pb: ['2rem', '2rem', '5rem'],
            ...(image && {
              display: 'grid',
              gap: '4rem 7rem',
              ...(image &&
                position === 'topLogo' && {
                  gap: '0rem',
                }),
              ...(image &&
                position === 'right' && {
                  gridTemplateColumns: ['100%', '100%', '50% 1fr'],
                }),
              gridTemplateAreas:
                position === 'bottom'
                  ? `"content"
                    "image"`
                  : position === 'top'
                  ? `"image"
                    "content"`
                  : position === 'topLogo'
                  ? `"image"
                    "content"`
                  : position === 'right'
                  ? [
                      `"content"
                       "image"`,
                      `"content"
                       "image"`,
                      `"content image"`,
                    ]
                  : ``,
            }),
            ...(textAlignment === 'left' && {
              display: 'grid',
              gridTemplateColumns: ['100%', '100%', '50% 1fr'],
              gridTemplateAreas: [
                `"content"
                "image"`,
                `"content"
                "image"`,
                `"content image"`,
              ],
            }),
            // the styling's pretty messy here, clean this up
          }}
        >
          <div
            sx={{
              textAlign: textAlignment,
              gridArea: 'content',
              mt: '5rem',
            }}
          >
            <div
              sx={{
                h1: {
                  fontSize: isFrontPage ? 'display2' : 'h2',
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
                  flexWrap: 'wrap',
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
                ...(position === 'topLogo' && {
                  maxWidth: '10rem',
                  justifySelf: 'center',
                }),
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
