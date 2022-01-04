/** @jsxImportSource theme-ui */
import { Link } from 'gatsby'
import * as React from 'react'
import { Container } from 'theme-ui'

import Logo from '../../../components/svg/Logo'

const Linkblock = ({ text, items, ...props }) => {
  const width = '31.881'

  return (
    <div
      sx={{
        py: '5rem',
      }}
      {...props}
    >
      <div
        sx={{
          pb: '1.25rem',
          textAlign: 'center',
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
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
            <Link
              to={item.pagelink.uri}
              key={index}
              sx={{
                flexBasis: ['100%', '100%', `${width}%`],
                textAlign: 'center',
                color: 'neutral.black',
                bg: 'neutral.backgroundHover',
                padding: '1.5rem',
                borderRadius: 'sm',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <div
                sx={{
                  height: '12.5rem',
                  width: '12rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {item.image?.sourceUrl ? (
                  <img
                    sx={{
                      width: '100%',
                    }}
                    src={item.image.sourceUrl}
                    alt=""
                  />
                ) : (
                  <Logo width="100%" fill="#610b70" />
                )}
              </div>

              <div>
                <p
                  sx={{
                    fontWeight: 'medium',
                  }}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            </Link>
          ))}
        </Container>
      </div>
    </div>
  )
}

export default Linkblock
