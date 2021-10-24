/** @jsxImportSource theme-ui */
import * as React from 'react'
import Navigation from '../Navigation'
import { Button, Container } from 'theme-ui'

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
  headerImage: { position, image },
  pageContext: {
    page: { isFrontPage },
  },
  ...props
}) => {
  return (
    <div
      {...props}
      sx={{
        ...(isFrontPage && { height: '92vh' }),
        color: `neutral.${textColor}`,
        mb: '5rem',
        ...(backgroundImage && {
          backgroundImage: `url(${backgroundImage.sourceUrl})`,
          backgroundSize: 'cover',
        }),
        backgroundColor: backgroundColor ? backgroundColor : 'neutral.white',
        display: 'grid',
        gridTemplateAreas: `'navigation'
                            'body'`,
        gridTemplateRows: 'max-content 1fr',
        position: 'relative',
      }}
    >
      <Navigation
        sx={{
          gridArea: 'navigation',
        }}
        color={`${textColor}`}
      />

      <Container
        sx={{
          ...(isFrontPage && { transform: 'translateY(-5rem)' }),
          alignSelf: 'center',
          gridArea: 'body',
          alignItems: 'center',
          py: '5rem',
          ...(image && {
            display: 'grid',
            gap: '4rem 7rem',
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
  )
}

export default Header
