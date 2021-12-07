/** @jsxImportSource theme-ui */
import * as React from 'react'

import { StoreContext } from '../../../context/Store'

const ReviewDetails = () => {
  const { checkout } = React.useContext(StoreContext)

  return (
    <div>
      <h4
        sx={{
          mt: '2.5rem',
          mb: '1rem',
        }}
      >
        Review your details
      </h4>
      <div>
        <span>Name:</span>
        <span>
          {checkout?.billing?.first_name} {checkout?.billing?.last_name}
        </span>
      </div>
      <div>
        <span>Email: </span>
        <span>{checkout?.billing?.email}</span>
      </div>
      <div>
        <span>Phone number: </span>
        <span>{checkout?.billing?.phone}</span>
      </div>
      <div>
        <span>Address: </span>
        <span>{checkout?.billing?.address_1}</span>
      </div>
      <div>
        <span>City: </span>
        <span>{checkout?.billing?.city}</span>
      </div>
      <div>
        <span>Delivery: </span>
        <span>{checkout?.shipping_lines?.[0].method_title}</span>
      </div>
    </div>
  )
}

export default ReviewDetails
