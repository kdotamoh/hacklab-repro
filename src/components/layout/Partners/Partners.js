/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from '@theme-ui/components'

/**
 * @param {Object} props
 */
const Partners = ({ text, partnerLogos, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        py: '5rem',
      }}
    >
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <div
          sx={{
            p: {
              pt: '1.5rem',
              lineHeight: 'h3',
            },
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: [
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              `repeat(${
                partnerLogos.length < 6 ? partnerLogos.length : 6
              }, 1fr)`,
            ],
            flexWrap: 'wrap',
            rowGap: '2rem',
            mt: '3.5rem',
            px: ['0', '0', '2rem'],
            gap: 'auto',
            justifyContent: 'center',
          }}
        >
          {partnerLogos?.map((item, index) => (
            <Logo key={index} {...{ item }} />
          ))}
        </div>
      </Container>
    </div>
  )
}

const Logo = ({ item }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexBasis: '20%',
        justifyContent: 'center',
      }}
    >
      <img
        sx={{
          width: '10rem',
          height: 'auto',
          objectFit: 'contain',
          aspectRatio: '2/1',
        }}
        src={`${item?.logo?.sourceUrl}`}
        alt=""
      />
    </div>
  )
}

export default Partners
