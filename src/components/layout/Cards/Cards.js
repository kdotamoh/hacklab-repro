/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'

const Cards = ({ card, text }) => {
  console.log(card)
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <Container
        sx={{
          pt: '2.5rem',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {card.map((card, index) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexBasis: '33%',
            }}
            key={index}
          >
            <img
              sx={{
                height: '6rem',
                width: '6rem',
                mb: '2.5rem',
              }}
              src={card.image?.sourceUrl}
              alt=""
            />
            <p
              sx={{
                fontWeight: 'bold',
              }}
              dangerouslySetInnerHTML={{ __html: card.text }}
            />
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Cards
