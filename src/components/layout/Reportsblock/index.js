/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'

const Reportsblock = ({ items, ...props }) => {
  const width = '31.881'

  console.log(items)

  return (
    <div
      sx={{
        py: '5rem',
      }}
      {...props}
    >
      {/* <div
        sx={{
          pb: '1.25rem',
          textAlign: 'center',
        }}
      /> */}
      <div>
        <Container
          sx={{
            display: 'flex',
            gap: 'flexGap',
            rowGap: ['1.5rem', '1.5rem', '3.5rem'],
            flexWrap: 'wrap',
            pt: '3.5rem',
            width: ['92%', '92%', '82%'],
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              sx={{
                flexBasis: ['100%', '100%', `${width}%`],
                textAlign: 'center',
                bg: 'neutral.backgroundHover',
                padding: '1.5rem',
                borderRadius: 'sm',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                sx={{
                  height: '12.5rem',
                  width: '12rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              ></div>

              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    fontWeight: 'medium',
                    textDecoration: 'none',
                    color: 'neutral.black',
                    // cursor: 'pointer',
                  }}
                >
                  {item.label}
                </a>
              </div>
              {item.download && (
                <a
                  href={item.download.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    textDecoration: 'underline',
                    fontSize: 'paragraph2',
                    color: 'primary',
                    pt: '.5rem',
                  }}
                >
                  Download file
                </a>
              )}
            </div>
          ))}
        </Container>
      </div>
    </div>
  )
}

export default Reportsblock
