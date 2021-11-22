/** @jsxImportSource theme-ui */
import * as React from 'react'

/**
 * @typedef Props
 * @prop {string | number} width
 * @prop {string | number} [height]
 * @prop {('down'|'right')} orientation
 * @prop {any} [sx]
 */

/**
 * @param {Props} props
 */
const Chevron = ({ orientation, ...props }) => {
  if (orientation === 'down')
    return (
      <svg
        sx={{
          ...props.sx,
        }}
        {...props}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.84668 1.5L5.84668 6.5L10.8467 1.5"
          stroke="white"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  return <div></div>
}

export default Chevron
