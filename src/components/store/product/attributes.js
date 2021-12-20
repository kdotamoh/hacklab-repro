/** @jsxImportSource theme-ui */
import * as React from 'react'

const Attributes = ({ attribute, handleSelected }) => {
  return (
    <div
      sx={{
        mb: '2.5rem',
      }}
    >
      <p
        sx={{
          mb: '1rem',
        }}
      >
        {attribute.label}
      </p>
      <div
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        {attribute.options?.map((option, index) => (
          <>
            {attribute.label.toLowerCase() === 'color' ? (
              <div
                sx={{
                  height: '3rem',
                  width: '3rem',
                  borderRadius: 'sm',
                  bg: option,
                  cursor: 'pointer',
                  outline: attribute.selected === option && 'solid 1px #1f2937',
                  outlineOffset: '.2rem',
                }}
                onClick={() =>
                  handleSelected({
                    label: attribute.label,
                    option: option,
                  })
                }
              />
            ) : attribute.label.toLowerCase() === 'colour' ? (
              <div
                sx={{
                  height: '3rem',
                  width: '3rem',
                  borderRadius: 'sm',
                  bg: option,
                  cursor: 'pointer',
                  outline: attribute.selected === option && 'solid 1px #1f2937',
                  outlineOffset: '.2rem',
                }}
                onClick={() =>
                  handleSelected({
                    label: attribute.label,
                    option: option,
                  })
                }
              />
            ) : (
              <span
                sx={{
                  border: '1px solid #E5E7EB',
                  px: '1rem',
                  py: '.5rem',
                  borderRadius: 'sm',
                  cursor: 'pointer',
                  outline:
                    attribute.selected === option
                      ? 'solid 1px #1f2937'
                      : 'black',
                }}
                key={index}
                onClick={() =>
                  handleSelected({
                    label: attribute.label,
                    option: option,
                  })
                }
              >
                {option}
              </span>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default Attributes
