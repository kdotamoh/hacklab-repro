/** @jsxImportSource theme-ui */
import * as React from 'react'

import { Container } from 'theme-ui'

const Testimonials = ({ testimonials }) => {
  return (
    <Container
      sx={{
        width: ['92%', '92%', '82%'],
      }}
    >
      <div
        sx={{
          bg: 'primary',
          color: 'neutral.white',
          borderRadius: ['sm', 'sm', '0'],
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: ['100%', '100%', '60% 1fr'],
              gridTemplateAreas: [
                `'image'
                 'text'`,
                `'image'
                 'text'`,
                `'text image'`,
              ],
            }}
            key={index}
          >
            <div
              sx={{
                pt: ['.5rem', '.5rem', '3.5rem'],
                pb: ['1.5rem', '1.5rem', '3.5rem'],
                pl: ['1rem', '1rem', '8rem'],
                pr: ['1rem', '1rem', '6rem'],
                gridArea: 'text',
              }}
            >
              <div
                sx={{
                  fontWeight: 'medium',
                }}
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />
              <p
                sx={{
                  pt: '2rem',
                  pb: '.5rem',
                  fontSize: 'paragraph1',
                  fontWeight: 'medium',
                }}
                dangerouslySetInnerHTML={{ __html: testimonial.name }}
              />
              <p
                sx={{
                  fontSize: 'paragraph2',
                }}
                dangerouslySetInnerHTML={{ __html: testimonial.role }}
              />
            </div>
            <img
              sx={{
                width: '100%',
                minHeight: '20rem',
                height: '100%',
                objectFit: 'cover',
                gridArea: 'image',
                transform: ['scale(.925)', 'scale(.925)', 'scale(1)'],
                borderRadius: ['sm', 'sm', '0'],
              }}
              src={testimonial.image?.sourceUrl}
              alt=""
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials
