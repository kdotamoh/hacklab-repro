/** @jsxImportSource theme-ui */
import * as React from 'react'

/**
 * @typedef Props
 * @prop {string | number} width
 * @prop {string | number} [height]
 * @prop {('left'|'right')} orientation
 * @prop {any} [sx]
 */

/**
 * @param {Props} props
 */
const Arrow = ({ orientation, ...props }) => {
  if (orientation === 'left')
    return (
      <svg
        sx={{
          ...props.sx,
        }}
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke="#667085"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  if (orientation === 'right')
    return (
      <svg
        sx={{
          ...props.sx,
        }}
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="#667085"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  return <div></div>
}

export default Arrow
