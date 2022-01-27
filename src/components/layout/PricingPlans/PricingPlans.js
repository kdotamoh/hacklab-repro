/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button, Divider } from 'theme-ui'

const PricingPlans = ({ backgroundColor, text, plan }) => {
  return (
    <>
      <div
        sx={{
          bg: backgroundColor,
          pt: '6rem',
          pb: '12rem',
        }}
      >
        <Container
          sx={{
            color: 'neutral.white',
            h2: {
              pb: '1.5rem',
            },
            p: {
              lineHeight: 'h3',
            },
            px: ['0', '0', '8rem'],
            width: ['92%', '92%', '82%'],
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr', 'repeat(3, 1fr)'],
          flexWrap: 'wrap',
          gap: 'flexGap',
          rowGap: '1rem',
          width: '85%',
          margin: '0 auto',
          marginTop: '-5rem',
        }}
      >
        {plan.map((item, index) => (
          <Plan item={item} key={index} />
        ))}
      </div>
    </>
  )
}

const Plan = ({ item }) => {
  const [active, setActive] = React.useState(0)
  return (
    <div
      sx={{
        bg: 'neutral.white',
        flexDirection: 'column',
        flexBasis: `31%`,
        mb: ['0', '0', '2.5rem'],
        textAlign: 'center',
        padding: '2rem',
        borderRadius: 'sm',
        // @ts-ignore
        border: (t) => `solid 1px ${t.colors.neutral.border}`,
      }}
    >
      <span
        sx={{
          borderRadius: 'xl',
          px: '.5rem',
          py: '.25rem',
          color: 'purple.hover',
          fontWeight: 'medium',
          bg: 'purple.surface',
          display: 'inline-block',
          mb: '1rem',
        }}
        dangerouslySetInnerHTML={{ __html: item.planDetails.label }}
      />
      <p
        sx={{
          fontWeight: 'bold',
          fontSize: 'h2',
          mb: '.5rem',
        }}
        dangerouslySetInnerHTML={{ __html: item.options[active].price }}
      />
      <p
        sx={{
          mb: '1rem',
          color: 'neutral.textPlaceholder',
          fontSize: 'paragraph2',
        }}
        dangerouslySetInnerHTML={{ __html: item.planDetails.description }}
      />
      <div
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {item.options.map((option, index) => (
          <span
            key={index}
            sx={{
              borderRadius: 'xl',
              px: '.5rem',
              py: '.25rem',
              fontWeight: 'medium',
              display: 'inline-block',
              cursor: 'pointer',
              color: active === index ? 'white' : 'purple.hover',
              bg: active === index ? 'purple.main' : 'purple.surface',
            }}
            onClick={() => setActive(index)}
            dangerouslySetInnerHTML={{ __html: option.label }}
          />
        ))}
      </div>
      <Divider
        sx={{
          my: '2rem',
        }}
      />
      <div
        sx={{
          textAlign: 'left',
        }}
      >
        {item.planDetails.features.map((feature, index) => (
          <div
            key={index}
            sx={{
              display: 'flex',
              gap: '.75rem',
              pb: '1rem',
            }}
          >
            <img src={feature.icon.sourceUrl} alt="" />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
      <a target="_blank" rel="noreferrer" href={item.button.linkUrl}>
        <Button
          sx={{
            width: '100%',
            mt: 'auto',
          }}
          variant={item.button.buttonVariant}
        >
          {item.button.buttonText}
        </Button>
      </a>
    </div>
  )
}

export default PricingPlans
