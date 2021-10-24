/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from 'theme-ui'

const PricingPlans = ({ backgroundColor, text, plan }) => {
  console.log(plan)
  return (
    <div
      sx={{
        bg: backgroundColor,
        pt: '6rem',
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
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></Container>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'flexGap',
          justifyContent: 'center',
          width: '85%',
          margin: '0 auto',
        }}
      >
        <>
          {plan.map((item, index) => (
            <div
              key={index}
              sx={{
                bg: 'neutral.white',
                flexDirection: 'column',
                flexBasis: `31%`,
                mb: '2.5rem',
                textAlign: 'center',
                padding: '2rem',
                borderRadius: 'sm',
              }}
            >
              <span
                sx={{
                  borderRadius: 'xl',
                  px: '.5rem',
                  py: '.25rem',
                  color: 'primary.hover',
                  fontWeight: 'medium',
                  bg: 'primary.surface',
                }}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              <p dangerouslySetInnerHTML={{ __html: item.price }} />
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
              <Button
                sx={{
                  width: '100%',
                }}
                variant={item.button.buttonVariant}
              >
                {item.button.buttonText}
              </Button>
              <div>
                {item.features.map((feature, index) => (
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
            </div>
          ))}
          {plan.map((item, index) => (
            <div
              key={index}
              sx={{
                bg: 'neutral.white',
                flexDirection: 'column',
                flexBasis: `31%`,
                mb: '2.5rem',
                textAlign: 'center',
                padding: '2rem',
                borderRadius: 'sm',
              }}
            >
              <span
                sx={{
                  borderRadius: 'xl',
                  px: '.5rem',
                  py: '.25rem',
                  color: 'primary.hover',
                  fontWeight: 'medium',
                  bg: 'primary.surface',
                }}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              <p dangerouslySetInnerHTML={{ __html: item.price }} />
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
              <Button
                sx={{
                  width: '100%',
                }}
                variant={item.button.buttonVariant}
              >
                {item.button.buttonText}
              </Button>
              <div>
                {item.features.map((feature, index) => (
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
            </div>
          ))}
        </>
      </div>
    </div>
  )
}

export default PricingPlans
