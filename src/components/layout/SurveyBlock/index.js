/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from 'theme-ui'

const Surveyblock = ({ buttonText, buttonVariant, linkUrl, text, image }) => {
  return (
    <>
      {text ? (
        <Container
          sx={{
            width: ['92%', '92%', '82%'],
          }}
        >
          <div
            sx={{
              bg: 'primary',
              borderRadius: 'sm',
              transform: 'scale(1.03)',
              padding: '3rem',
              display: 'grid',
              gridTemplateAreas: [
                `"image"
                "text"`,
                `"image"
                "text"`,
                `"text image"`,
              ],
              gridTemplateColumns: ['1fr', '1fr', '1.5fr 1fr'],
              gap: ['1rem', '1rem', '2rem'],
              mt: '7.25rem',
              boxShadow:
                '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
            }}
          >
            <div
              sx={{
                gridArea: 'text',
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'neutral.white',
                  pt: '1.5rem',
                  h1: { pb: '1rem' },
                  h2: { pb: '1rem' },
                  h3: { pb: '1rem' },
                  h4: { pb: '1rem' },
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <a
                sx={{
                  width: ['100%', '100%', 'max-content'],
                  height: 'max-content',
                  ml: ['0', '0', 'auto'],
                  mt: '2rem',
                  display: 'inline-block',
                }}
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={buttonVariant}>{buttonText}</Button>
              </a>
            </div>
            <img
              sx={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                borderRadius: 'sm',
                gridArea: 'image',
              }}
              src={image?.sourceUrl}
              alt=""
            />
          </div>
        </Container>
      ) : null}
    </>
  )
}

export default Surveyblock
