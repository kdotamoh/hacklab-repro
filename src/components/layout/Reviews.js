/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'
import Masonry from 'react-masonry-css'

/**
 * @param {Object} props
 */
const Reviews = (props) => {
  const count = [
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+',
    },
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants',
    },
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants. Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants',
    },
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants',
    },
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants',
    },
    {
      text: 'The Annual Hacklab Hackathon is hosted in Ghana annually and brings together 1000+ participants',
    },
  ]
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
        {/* <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'gapDefault',
          }}
        > */}
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {count.map((item, index) => (
            <Review key={index} {...{ item }} />
          ))}
        </Masonry>
        {/* </div> */}
      </Container>
    </div>
  )
}

/**
 * @param {Object} props
 * @param {Object} props.item
 * @param {string} props.item.text
 */
const Review = ({ item }) => {
  return (
    <div
      sx={{
        color: 'neutral.black',
        bg: 'neutral.white',
        p: '1.5rem',
        borderRadius: 'sm',
        fontSize: 'paragraph2',
        display: 'flex',
        flexBasis: '30%',
        gap: 'gapDefault',
        flexDirection: 'column',
      }}
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
        {item.text}
      </p>
    </div>
  )
}

export default Reviews
