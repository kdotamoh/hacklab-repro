/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container } from 'theme-ui'

/**
 * @param {Object} props
 */
const Team = ({ heading, subtitle, items, ...props }) => {
  return (
    <div
      sx={{
        mb: '9rem',
      }}
      {...props}
    >
      <h2
        sx={{
          pb: '1.25rem',
          textAlign: 'center',
        }}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {subtitle && (
        <p
          sx={{
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      <div>
        <Container
          sx={{
            display: 'flex',
            gap: 'flexGap',
            rowGap: '3.5rem',
            flexWrap: 'wrap',
            pt: '3.5rem',
          }}
        >
          {items.map((item, index) => (
            <Item {...{ item }} key={index} />
          ))}
        </Container>
      </div>
    </div>
  )
}

const Item = ({ item }) => {
  const width = '31.881'

  return (
    <div
      sx={{
        flexBasis: `${width}%`,
        textAlign: 'center',
        color: 'neutral.black',
        bg: 'neutral.backgroundHover',
        padding: '1.5rem',
        borderRadius: 'sm',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        sx={{
          borderRadius: 'rounded',
          height: '12.5rem',
          width: '12.5rem',
          mb: '2rem',
        }}
        src={item.avatar?.sourceUrl}
        alt=""
      />
      <div>
        <p
          sx={{
            fontWeight: 'bold',
          }}
          dangerouslySetInnerHTML={{ __html: item.name }}
        />
        <p
          sx={{
            fontSize: 'paragraph1',
            py: '1rem',
          }}
          dangerouslySetInnerHTML={{ __html: item.role }}
        />
      </div>
      <div
        sx={{
          display: 'flex',
          gap: '.625rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.social?.map((social, index) => (
          <a key={index} href={social.linkUrl} target="_blank" rel="noreferrer">
            <img
              sx={{
                height: '1rem',
                width: '1rem',
              }}
              src={social.icon?.sourceUrl}
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Team
