/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from 'theme-ui'
import { Link } from 'gatsby'

const ContentBlock = ({
  content,
  image,
  textPosition,
  buttons,
  imageFit,
  ...props
}) => {
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateAreas:
          textPosition === 'left' ? `'content media'` : `'media content'`,
        gridTemplateColumns: '.5fr .5fr',
        gap: '5rem',
        alignItems: 'center',
        py: '5rem',
      }}
    >
      <div
        sx={{
          gridArea: 'content',
          py: '2rem',
        }}
      >
        <div
          sx={{
            mb: '2.5rem',
            h2: {
              pb: '2.5rem',
            },
            h3: {
              pb: '2.5rem',
            },
            p: {
              lineHeight: 'h3',
            },
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {buttons && (
          <div
            sx={{
              display: 'flex',
              gap: '.75rem',
            }}
          >
            {buttons.map((button, index) => (
              <>
                {button.buttonVariant === 'link' ? (
                  <Link
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary',
                      textDecoration: 'none',
                    }}
                    to="/"
                  >
                    {button.buttonText}
                  </Link>
                ) : (
                  <Link key={index} to={button.linkUrl}>
                    <Button variant={button.buttonVariant}>
                      {button.buttonText}
                    </Button>
                  </Link>
                )}
              </>
            ))}
          </div>
        )}
      </div>
      {image && (
        <img
          sx={{
            gridArea: 'media',
            width: '100%',
            objectFit: imageFit,
            height: '100%',
            minHeight: '32.5rem',
            borderRadius: 'md',
          }}
          src={image?.sourceUrl}
          alt=""
        />
      )}
    </Container>
  )
}

export default ContentBlock
