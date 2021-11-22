/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import { Link } from 'gatsby'

import Logo from '../../svg/Logo'
import Arrow from '../../svg/Arrow'

/**
 * @param {Object} props
 */
const Initiatives = ({ heading, subtitle, items, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        color: 'neutral.black',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        py: '5rem',
      }}
    >
      <Container
        sx={{
          width: ['92%', '92%', '82%'],
        }}
      >
        <h2
          sx={{
            pb: '1.25rem',
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p dangerouslySetInnerHTML={{ __html: subtitle }} />
      </Container>
      <div>
        <div
          sx={{
            mb: '2rem',
            display: 'flex',
            gap: 'gapDefault',
            pt: '4rem',
            overflowX: 'scroll',
            msOverflowY: 'hidden',
            marginLeft: '9%',
            paddingRight: '2.5rem',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {items.map((item, index) => (
            <Item {...{ item }} key={index} />
          ))}
        </div>
        <div
          sx={{
            display: 'flex',
            marginLeft: '9%',
            mb: '6rem',
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
    </div>
  )
}

const Item = ({ item }) => {
  return (
    <div
      sx={{
        minWidth: ['20rem', '20rem', '23.75rem'],
        flexBasis: '33%',
        textAlign: 'left',
        color: 'neutral.black',
        bg: 'neutral.backgroundHover',
        padding: '1.5rem',
        borderRadius: 'sm',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* <Logo
        width="52%"
        fill="white"
        sx={{
          mb: '2rem',
        }}
      /> */}
      <img
        sx={{
          height: '3rem',
          width: 'auto',
          alignSelf: 'flex-start',
          mb: '2rem',
        }}
        src={item.logo.sourceUrl}
        alt=""
      />

      <div
        sx={{
          borderRadius: 'sm',
          border: (t) => `solid 2px ${t.colors.neutral.border}`,
          p: '2rem 1.5rem',
        }}
      >
        <h4 dangerouslySetInnerHTML={{ __html: item.heading }} />
        <p
          sx={{
            fontSize: 'subHeading',
            pt: '1rem',
            pb: '2rem',
          }}
          dangerouslySetInnerHTML={{ __html: item.subtitle }}
        />
        <Link
          sx={{
            fontSize: 'paragraph1',
            textDecoration: 'none',
            color: 'neutral.black',
          }}
          to={item.link}
          dangerouslySetInnerHTML={{ __html: item.linkText }}
        />
      </div>
    </div>
  )
}

export default Initiatives
