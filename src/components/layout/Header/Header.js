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
  heading,
  subtitle,
  textColor,
  textAlignment,
  backgroundColor,
  backgroundImage,
  buttons,
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
          py: '5rem',
        }}
      >
        <div
          sx={{
            textAlign: textAlignment,
          }}
        >
          <h1
            sx={{
              pb: '1.25rem',
              fontSize: 'display2',
            }}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          {subtitle && <p dangerouslySetInnerHTML={{ __html: subtitle }} />}
          {buttons && (
            <div
              sx={{
                display: 'flex',
                gap: '.75rem',
              }}
            >
              {buttons.map((button, index) => (
                <Link key={index} to={button.linkUrl}>
                  <Button variant={button.buttonVariant}>
                    {button.buttonText}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Header
