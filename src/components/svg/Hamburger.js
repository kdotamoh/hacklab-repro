/** @jsxImportSource theme-ui */
import * as React from 'react'

/**
 * @typedef Props
 * @prop {string | number} [height]
 * @prop {string} [fill="color"]
 * @prop {any} [sx]
 */

/**
 * @param {Props} props
 */
const Hamburger = (props) => {
  return (
    <svg
      sx={{
        ...props.sx,
        stroke: props.fill,
      }}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hamburger
