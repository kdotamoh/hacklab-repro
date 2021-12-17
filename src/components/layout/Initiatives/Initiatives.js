/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Button, Container } from 'theme-ui'
import { Link } from 'gatsby'
import useEmblaCarousel from 'embla-carousel-react'

import Arrow from '../../svg/Arrow'

/**
 * @param {Object} props
 */
const Initiatives = ({ heading, subtitle, items, ...props }) => {
  const options = { align: 'start' }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
      <div className="embla" ref={emblaRef}>
        <div
          className="embla__container"
          sx={{
            mb: '2rem',
            mt: '4rem',
            marginLeft: '9%',
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
          <Button variant="circle" onClick={() => scrollPrev()}>
            <Arrow width="1.5rem" orientation="left" />
          </Button>
          <Button variant="circle" onClick={() => scrollNext()}>
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
      className="embla__slide"
      sx={{
        minWidth: ['20rem', '20rem', '23.75rem'],

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
      <img
        sx={{
          height: '3rem',
          width: 'auto',
          alignSelf: 'flex-start',
          mb: '2rem',
        }}
        src={item?.logo?.sourceUrl}
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
