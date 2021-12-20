/** @jsxImportSource theme-ui */
import * as React from 'react'

const Quantity = ({ decrement, increment, value }) => {
  return (
    <div
      sx={{
        padding: '.5rem',
        border: '1px solid #E5E7EB',
        borderRadius: 'sm',
        alignItems: 'center',
        display: 'flex',
        width: 'max-content',
      }}
    >
      <Minus
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => decrement()}
      />
      <span
        sx={{
          mx: '.5rem',
          fontWeight: 'bold',
          width: '2rem',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        {value}
      </span>
      <Plus
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => increment()}
      />
    </div>
  )
}

const Minus = (props) => {
  return (
    <svg
      {...props}
      width="12"
      height="3"
      viewBox="0 0 12 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6666 1.5H1.66663"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Plus = (props) => {
  return (
    <svg
      {...props}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 4V13"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1875 8.5H3.8125"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Quantity
