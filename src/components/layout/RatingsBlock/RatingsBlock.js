/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import useEmblaCarousel from 'embla-carousel-react'

import Arrow from '../../svg/Arrow'
import Stars from '../../svg/Stars'

const RatingsBlock = ({ image, ratings, ...props }) => {
  const options = { align: 'start' }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: ['100%', '100%', '50% 1fr'],
        gridTemplateAreas: [
          `'rating'
          'image'`,
          `'rating'
          'image'`,
          `'rating image'`,
        ],
        alignItems: 'center',
        gap: '1rem 4rem',
        py: '5rem',
        width: ['92%', '92%', '82%'],
      }}
    >
      <div
        sx={{
          gridArea: 'rating',
          py: '2rem',
        }}
      >
        <div
          ref={emblaRef}
          sx={{
            overflow: 'hidden',
          }}
        >
          <div
            sx={{
              display: 'flex',
            }}
          >
            {ratings.map((rating, index) => (
              <Rating key={index} {...{ rating }} />
            ))}
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="circle" onClick={() => scrollPrev()}>
            <Arrow width="1.5rem" orientation="left" />
          </Button>
          <Button variant="circle" onClick={() => scrollNext()}>
            <Arrow width="1.5rem" orientation="right" />
          </Button>
        </div>
      </div>
      <img
        sx={{
          gridArea: 'image',
          width: '100%',
          borderRadius: 'sm',
          objectFit: 'cover',
          aspectRatio: '5/4',
        }}
        src={image?.sourceUrl}
        alt=""
      />
    </Container>
  )
}

const Rating = ({ rating }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'max-content',
        position: 'relative',
        minWidth: '100%',
        maxWidth: '100%',
        flex: '0 0 auto',
      }}
    >
      <Stars rating={rating.stars} />
      <p
        sx={{
          fontWeight: 'bold',
          fontSize: 'h2',
          py: '3rem',
        }}
        dangerouslySetInnerHTML={{ __html: rating.text }}
      />

      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          sx={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <img
            src={rating.avatar?.sourceUrl}
            sx={{
              borderRadius: 'rounded',
              width: '3.5rem',
              height: '3.5rem',
              bg: 'primary',
              objectFit: 'cover',
            }}
          ></img>
          <div
            sx={{
              flex: 'display',
              flexDirection: 'column',
            }}
          >
            <p
              sx={{
                fontWeight: 'bold',
                pb: '.5rem',
              }}
              dangerouslySetInnerHTML={{ __html: rating.name }}
            />
            <p
              sx={{
                fontSize: 'paragraph2',
                color: 'neutral.textDisabled',
              }}
              dangerouslySetInnerHTML={{ __html: rating.role }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingsBlock
