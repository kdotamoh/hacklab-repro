/** @jsxImportSource theme-ui */
import * as React from 'react'

const StepBlock = ({ text, steps }) => {
  console.log(steps)
  return (
    <div
      sx={{
        py: '6rem',
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {steps.map((step, index) => (
        <div
          sx={{
            display: 'grid',
            gap: '5rem',
            px: 'calc(6.5rem + 9%)',
            py: '5rem',
            justifyContent: 'space-between',
            bg: step.backgroundColor,
            alignItems: 'center',
            ...(step.textPosition === 'left'
              ? {
                  gridTemplateAreas: `'text image'`,
                  gridTemplateColumns: '60% 1fr',
                }
              : {
                  gridTemplateAreas: `'image text'`,
                  gridTemplateColumns: '1fr 60%',
                }),
          }}
          key={index}
        >
          <div
            sx={{
              gridArea: 'text',
              p: { fontSize: 'paragraph1' },
              display: 'flex',
              alignItems: 'center',
              '::before': {
                content: `"${index + 1}"`,
                display: 'inline-block',
                fontWeight: 'bold',
                fontSize: '9rem',
                color: step.numberColor,
              },
            }}
          >
            <div
              sx={{
                p: {
                  pt: '.25rem',
                },
              }}
              dangerouslySetInnerHTML={{ __html: step.text }}
            />
          </div>
          <img
            sx={{
              gridArea: 'image',
              height: 'auto',
              width: '100%',
              objectFit: 'contain',
            }}
            src={step.image.sourceUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}

export default StepBlock
