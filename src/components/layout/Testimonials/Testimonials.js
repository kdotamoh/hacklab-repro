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
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: '60% 1fr',
            }}
            key={index}
          >
            <div
              sx={{
                py: '3.5rem',
                pl: '8rem',
                pr: '6rem',
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
