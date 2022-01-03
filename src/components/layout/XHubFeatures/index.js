/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'
import { Link } from 'gatsby'

import Arrow from '../../../components/svg/Arrow'

const XHubFeatures = ({ features, image }) => {
  const [active, setActive] = React.useState(0)
  return (
    <Container
      sx={{
        width: ['92%', '92%', '82%'],
        py: '4rem',
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '45% 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
          {features.map((feature, key) => (
            <div
              key={key}
              onMouseEnter={() => setActive(key)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                borderLeft: `.25rem solid ${
                  key === active ? '#610B70' : '#F3F4F6'
                }`,
                cursor: 'pointer',
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: feature.text }}
                sx={{
                  p: {
                    pt: '1rem',
                    pb: '2rem',
                    color: '#6B7280',
                  },
                }}
              />
              {feature.pageLink ? (
                <Link
                  sx={{
                    fontSize: 'h4',
                    color: 'primary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  to={feature.pageLink.uri}
                >
                  <span
                    sx={{
                      mr: '.5rem',
                    }}
                  >
                    {feature.linkText}
                  </span>

                  <Arrow
                    width="1.2rem"
                    orientation="right"
                    sx={{ path: { stroke: '#610B70' } }}
                  />
                </Link>
              ) : (
                <a
                  sx={{
                    fontSize: 'h4',
                    color: 'primary',
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    sx={{
                      mr: '.5rem',
                    }}
                  >
                    {feature.linkText}
                  </span>
                  <Arrow
                    width="1.2rem"
                    orientation="right"
                    sx={{ path: { stroke: '#610B70' } }}
                  />
                </a>
              )}
            </div>
          ))}
        </div>
        <div>
          <img
            src={image.sourceUrl}
            sx={{
              width: '100%',
              borderRadius: 'md',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
            alt=""
          />
        </div>
      </div>
    </Container>
  )
}

export default XHubFeatures
