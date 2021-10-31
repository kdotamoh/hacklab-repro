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
          textPosition === 'left'
            ? [
                `"content"
                 "media"`,
                `"content"
                 "media"`,
                `'content media'`,
              ]
            : [
                `"content"
                 "media"`,
                `"content"
                 "media"`,
                `'media content'`,
              ],
        gridTemplateColumns: ['100%', '100%', '50% 1fr'],
        gap: '0 5rem',
        alignItems: 'center',
        py: '5rem',
        width: ['92%', '92%', '82%'],
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
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: content.replace(/&nbsp;/g, ' ') }}
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
            height: 'auto',
            minHeight: ['20rem', '20rem', '32.5rem'],
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
