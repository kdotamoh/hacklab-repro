/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button } from 'theme-ui'

import Logo from '../svg/Logo'
import Arrow from '../svg/Arrow'

/**
 * @param {Object} props
 */
const Initiatives = (props) => {
  const count = [1, 2, 3, 4, 5]
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2
        sx={{
          pb: '1.25rem',
        }}
      >
        Our Initiatives
      </h2>
      <p>Our Proud sponsors and partners for Hacklab's Initiatives</p>
      <div>
        <div
          sx={{
            mb: '2rem',
            display: 'flex',
            gap: 'gapDefault',
            pt: '4rem',
            overflowX: 'scroll',
            msOverflowY: 'hidden',
            marginLeft: '9%',
            paddingRight: '2.5rem',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {count.map((item) => (
            <div
              key={item}
              sx={{
                minWidth: '23.75rem',
                flexBasis: '33%',
                textAlign: 'left',
                color: 'neutral.white',
                bg: 'primary.main',
                padding: '1.5rem',
                borderRadius: 'sm',
              }}
            >
              <Logo
                width="52%"
                fill="white"
                sx={{
                  pb: '3.75rem',
                }}
              />

              <div
                sx={{
                  borderRadius: 'sm',
                  border: 'solid 2px rgba(255, 255, 255, 0.5)',
                  p: '2rem 1.5rem',
                }}
              >
                <h4>Annual Hackathon</h4>
                <p
                  sx={{
                    fontSize: 'subHeading',
                    pt: '1rem',
                    pb: '2rem',
                  }}
                >
                  Pellentesque pretium velit, tristique ut. Adipiscing orci vel
                  convallis pulvinar eu ornare.
                </p>
                <p
                  sx={{
                    fontSize: 'paragraph1',
                  }}
                >
                  Learn more
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          sx={{
            display: 'flex',
            marginLeft: '9%',
            mb: '6rem',
            gap: '2rem',
          }}
        >
          <Button variant="circle">
            <Arrow width="1.5rem" orientation="left" />
          </Button>
          <Button variant="circle">
            <Arrow width="1.5rem" orientation="right" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Initiatives
