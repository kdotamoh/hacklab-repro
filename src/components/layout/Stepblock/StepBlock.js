/** @jsxImportSource theme-ui */
import * as React from 'react'

const StepBlock = ({ text, steps }) => {
  return (
    <div
      sx={{
        py: ['2.5rem', '2.5rem', '6rem'],
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {steps.map((step, index) => (
        <div
          sx={{
            display: 'grid',
            gap: '5rem',
            rowGap: '2rem',
            px: ['2rem', '2rem', 'calc(6.5rem + 9%)'],
            py: ['2.5rem', '2.5rem', '5rem'],
            justifyContent: 'space-between',
            bg: step.backgroundColor,
            alignItems: 'center',
            ...(step.textPosition === 'left'
              ? {
                  gridTemplateAreas: [
                    `'image'
                     'text'`,
                    `'image' 
                     'text'`,
                    `'text image'`,
                  ],
                  gridTemplateColumns: ['100%', '100%', '60% 1fr'],
                }
              : {
                  gridTemplateAreas: [
                    `'image'
                     'text'`,
                    `'image' 
                     'text'`,
                    `'image text'`,
                  ],
                  gridTemplateColumns: ['100%', '100%', '1fr 60%'],
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
                pr: '.5rem',
                color: step.numberColor,
              },
            }}
          >
            <div
              sx={{
                p: {
                  pt: '.25rem',
                },
                h3: {
                  fontSize: 'h3',
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
