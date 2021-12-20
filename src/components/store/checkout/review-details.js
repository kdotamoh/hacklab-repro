/** @jsxImportSource theme-ui */
import * as React from 'react'

import { StoreContext } from '../../../context/Store'

const ReviewDetails = () => {
  const { checkout } = React.useContext(StoreContext)
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 1fr',
    gap: '2rem',
  }

  return (
    <>
      <h4
        sx={{
          mt: '2.5rem',
          mb: '1rem',
        }}
      >
        Review your details
      </h4>
      <div
        sx={{
          bg: '#F9FAFB',
          padding: '1.5rem',
          borderRadius: 'sm',
          display: 'flex',
          flexDirection: 'column',
          gap: '.75rem',
        }}
      >
        <div sx={gridStyle}>
          <span>Name:</span>
          <span>
            {checkout?.billing?.first_name} {checkout?.billing?.last_name}
          </span>
        </div>
        <div sx={gridStyle}>
          <span>Email: </span>
          <span>{checkout?.billing?.email}</span>
        </div>
        <div sx={gridStyle}>
          <span>Phone number: </span>
          <span>{checkout?.billing?.phone}</span>
        </div>
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '30% 1fr',
            gap: '2rem',
          }}
        >
          <span>Address: </span>
          <span>{checkout?.billing?.address_1}</span>
        </div>
        <div sx={gridStyle}>
          <span>City: </span>
          <span>{checkout?.billing?.city}</span>
        </div>
        <div sx={gridStyle}>
          <span>Delivery: </span>
          <span>{checkout?.shipping_lines?.[0].method_title}</span>
        </div>
        <div sx={gridStyle}>
          <span>Line items: </span>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
            }}
          >
            {checkout?.line_items?.map((line_item, index) => (
              <span key={index}>
                {line_item.name} x{line_item.quantity}
              </span>
            ))}
          </div>
        </div>
        <div
          sx={{
            ...gridStyle,
            fontWeight: 'bold',
          }}
        >
          <span>Total: </span>
          <span>GH¢{checkout?.total}</span>
        </div>
      </div>
    </>
  )
}

export default ReviewDetails
