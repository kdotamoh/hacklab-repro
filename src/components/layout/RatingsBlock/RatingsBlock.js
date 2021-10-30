/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'

import Arrow from '../../svg/Arrow'
import Stars from '../../svg/Stars'

const RatingsBlock = ({ image, ratings, ...props }) => {
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateAreas: `'rating image'`,
        alignItems: 'center',
        gap: '4rem',
        py: '5rem',
      }}
    >
      <div
        sx={{
          gridArea: 'rating',
          py: '2rem',
        }}
      >
        {ratings.map((rating, index) => (
          <Rating key={index} {...{ rating }} />
        ))}
      </div>
      <img
        sx={{
          gridArea: 'image',
          width: '100%',
          borderRadius: 'sm',
          objectFit: 'cover',
          height: '100%',
        }}
        src={image?.sourceUrl}
        alt=""
      />
    </Container>
  )
}

const RatingButtons = () => {
  return (
    <div>
      <div
        sx={{
          display: 'flex',
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
  )
}

const Rating = ({ rating }) => {
  return (
    <>
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
              dangerouslySetInnerHTML={{ __html: 'name' }}
            />
            <p
              sx={{
                fontSize: 'paragraph2',
                color: 'neutral.textDisabled',
              }}
              dangerouslySetInnerHTML={{ __html: 'role' }}
            />
          </div>
        </div>
        <RatingButtons />
      </div>
    </>
  )
}

export default RatingsBlock
