/** @jsxImportSource theme-ui */
import { Container } from '@theme-ui/components'
import * as React from 'react'

/**
 * @param {Object} props
 */
const Reviews = (props) => {
  const count = [1, 2, 3, 4, 5, 6]
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.white',
        bg: 'primary.hover',
        pt: '4rem',
        pb: '11.5rem',
      }}
    >
      <Container>
        <h3
          sx={{
            textAlign: 'center',
            mb: '1.5rem',
          }}
        >
          Review from Participants
        </h3>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'gapDefault',
          }}
        >
          {count.map((item) => (
            <div
              sx={{
                color: 'neutral.black',
                bg: 'neutral.white',
                p: '1.5rem',
                borderRadius: 'sm',
                fontSize: 'paragraph2',
                display: 'flex',
                flexBasis: '32%',
                gap: 'gapDefault',
                flexDirection: 'column',
              }}
              key={item}
            >
              <div
                sx={{
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <span
                  sx={{
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    bg: 'primary.main',
                  }}
                ></span>
                <div
                  sx={{
                    flex: 'display',
                    flexDirection: 'column',
                  }}
                >
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      fontWeight: 'bold',
                      pb: '.25rem',
                    }}
                  >
                    Mechenzy
                  </p>
                  <p
                    sx={{
                      fontSize: 'paragraph2',
                      color: 'neutral.textDisabled',
                    }}
                  >
                    Writer
                  </p>
                </div>
              </div>
              <p
                sx={{
                  fontSize: 'paragraph2',
                }}
              >
                The Annual Hacklab Hackathon is hosted in Ghana annually and
                brings together 1000+ participants
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Reviews
