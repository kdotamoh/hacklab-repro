/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Divider } from '@theme-ui/components'

import { StoreContext } from '../../../context/Store'
import Quantity from '../product/quantity'
import parsePrice from '../../../utils/parsePrice'

/**
 * @param {Object} props
 * @param {boolean} [props.reviewing]
 * @param {boolean} [props.isSingleProduct]
 * @param {Object} [props.deliveryMethod]
 */
const OrderDetails = ({ reviewing, isSingleProduct, deliveryMethod }) => {
  const {
    cart,
    checkout,
    removeLineItem,
    incrementQuantity,
    decrementQuantity,
    incrementSingleItem,
    decrementSingleItem,
    singleItemPurchase,
  } = React.useContext(StoreContext)

  const subTotal = isSingleProduct
    ? Number(parsePrice({ price: singleItemPurchase?.product?.price })) *
      singleItemPurchase.quantity
    : Number(
        cart.reduce((prev, curr) => {
          return (
            prev +
            curr.quantity * Number(parsePrice({ price: curr.product.price }))
          )
        }, 0)
      )

  const total = subTotal + Number(deliveryMethod?.total)

  if (isSingleProduct) {
    return (
      <div>
        <h4
          sx={{
            mt: '2.5rem',
            mb: '1rem',
          }}
        >
          Order Details
        </h4>
        <div
          sx={{
            bg: '#F9FAFB',
            padding: '1.5rem',
            pt: '0rem',
            borderRadius: 'sm',
          }}
        >
          <div
            sx={{
              display: 'flex',
              gap: '.75rem',
              borderBottom: '1px solid #E5E7EB',
              py: '1.5rem',
              position: 'relative',
            }}
          >
            <img
              sx={{
                height: '7.5rem',
                width: '6.25rem',
                objectFit: 'cover',
                borderRadius: 'sm',
              }}
              src={singleItemPurchase.product?.featuredImage?.node?.sourceUrl}
            />

            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              }}
            >
              <span
                sx={{
                  fontWeight: 'bold',
                  pb: '.5rem',
                }}
              >
                {singleItemPurchase.product?.name}
              </span>
              <div>
                {singleItemPurchase.meta_data?.map((meta_data, index) => (
                  <div key={index}>
                    {meta_data.key.toLowerCase() === 'color' ? (
                      <div
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        <span>{meta_data.key}:</span>
                        <span
                          sx={{
                            height: '1rem',
                            width: '1rem',
                            borderRadius: 'sm',
                            bg: meta_data.value,
                            display: 'inline-block',
                          }}
                        />
                      </div>
                    ) : meta_data.key.toLowerCase() === 'colour' ? (
                      <div
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        <span>{meta_data.key}:</span>
                        <span
                          sx={{
                            height: '1rem',
                            width: '1rem',
                            borderRadius: 'sm',
                            bg: meta_data.value,
                          }}
                        />
                      </div>
                    ) : (
                      <span
                        key={index}
                        sx={{
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        {meta_data.key}: {meta_data.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'space-between',
                  // mt: '1rem',
                }}
              >
                <span
                  sx={{
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}
                >
                  GH¢{parsePrice({ price: singleItemPurchase.product?.price })}
                </span>
                <Quantity
                  decrement={() => decrementSingleItem()}
                  increment={() => incrementSingleItem()}
                  value={singleItemPurchase.quantity}
                />
              </div>
            </div>
          </div>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
            }}
          >
            <div
              sx={{
                mt: '1.5rem',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span>Subtotal</span>
              <span>GH¢{subTotal.toFixed(2)}</span>
            </div>
          </div>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              my: '1.5rem',
            }}
          >
            <span>Shipping</span>
            <span>GH¢{deliveryMethod.total}</span>
          </div>
          <Divider />
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              fontSize: 'h4',
              mt: '1.5rem',
            }}
          >
            <span>Total</span>
            <span>GH¢{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }

  // if (reviewing) {
  //   const subTotal = Number(
  //     checkout.line_items?.reduce((prev, curr) => {
  //       return prev + Number(curr.total)
  //     }, 0)
  //   )
  //   return (
  //     <div>
  //       <h4
  //         sx={{
  //           mt: '2.5rem',
  //           mb: '1rem',
  //         }}
  //       >
  //         Order Details
  //       </h4>
  //       <div
  //         sx={{
  //           bg: '#F9FAFB',
  //           padding: '1.5rem',
  //           pt: '0rem',
  //           borderRadius: 'sm',
  //         }}
  //       >
  //         {checkout?.line_items?.map((item, index) => (
  //           <div
  //             key={index}
  //             sx={{
  //               display: 'flex',
  //               gap: '.75rem',
  //               borderBottom: '1px solid #E5E7EB',
  //               py: '1.5rem',
  //               position: 'relative',
  //             }}
  //           >
  //             <img
  //               sx={{
  //                 height: '7.5rem',
  //                 width: '6.25rem',
  //                 objectFit: 'cover',
  //                 borderRadius: 'sm',
  //               }}
  //               // src={item.product.featuredImage?.node?.sourceUrl}
  //             />
  //             <div
  //               sx={{
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 width: '100%',
  //                 height: '100%',
  //               }}
  //             >
  //               <span
  //                 sx={{
  //                   fontWeight: 'bold',
  //                   pb: '.5rem',
  //                 }}
  //               >
  //                 {item.name}
  //               </span>
  //               <div>
  //                 {item.meta_data.map((meta_data, index) => (
  //                   <div key={index}>
  //                     {meta_data.key.toLowerCase() === 'color' ? (
  //                       <div
  //                         sx={{
  //                           display: 'flex',
  //                           alignItems: 'center',
  //                           gap: '.4rem',
  //                           py: '.4rem',
  //                           color: '#4B5563',
  //                         }}
  //                       >
  //                         <span>{meta_data.key}:</span>
  //                         <span
  //                           sx={{
  //                             height: '1rem',
  //                             width: '1rem',
  //                             borderRadius: 'sm',
  //                             bg: meta_data.value,
  //                             display: 'inline-block',
  //                           }}
  //                         />
  //                       </div>
  //                     ) : meta_data.key.toLowerCase() === 'colour' ? (
  //                       <div
  //                         sx={{
  //                           display: 'flex',
  //                           alignItems: 'center',
  //                           gap: '.4rem',
  //                           py: '.4rem',
  //                           color: '#4B5563',
  //                         }}
  //                       >
  //                         <span>{meta_data.key}:</span>
  //                         <span
  //                           sx={{
  //                             height: '1rem',
  //                             width: '1rem',
  //                             borderRadius: 'sm',
  //                             bg: meta_data.value,
  //                           }}
  //                         />
  //                       </div>
  //                     ) : (
  //                       <span
  //                         key={index}
  //                         sx={{
  //                           py: '.4rem',
  //                           color: '#4B5563',
  //                         }}
  //                       >
  //                         {meta_data.key}: {meta_data.value}
  //                       </span>
  //                     )}
  //                   </div>
  //                 ))}
  //               </div>

  //               <div
  //                 sx={{
  //                   display: 'flex',
  //                   width: '100%',
  //                   height: '100%',
  //                   justifyContent: 'space-between',
  //                   // mt: '1rem',
  //                 }}
  //               >
  //                 <span
  //                   sx={{
  //                     fontWeight: 'bold',
  //                     alignSelf: 'flex-end',
  //                   }}
  //                 >
  //                   GH¢{item?.price}
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //         <div
  //           sx={{
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //             fontWeight: 'bold',
  //           }}
  //         >
  //           <div
  //             sx={{
  //               mt: '1.5rem',
  //               display: 'flex',
  //               width: '100%',
  //               justifyContent: 'space-between',
  //             }}
  //           >
  //             <span>Subtotal</span>
  //             <span>GH¢{Number(subTotal)}</span>
  //           </div>
  //         </div>
  //         <div
  //           sx={{
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //             fontWeight: 'bold',
  //             my: '1.5rem',
  //           }}
  //         >
  //           <span>Shipping</span>
  //           <span>GH¢{Number(checkout.shipping_lines?.[0].total)}</span>
  //         </div>
  //         <Divider />
  //         <div
  //           sx={{
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //             fontWeight: 'bold',
  //             fontSize: 'h4',
  //             mt: '1.5rem',
  //           }}
  //         >
  //           <span>Total</span>
  //           <span>GH¢{Number(checkout.total)}</span>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div>
      <h4
        sx={{
          mt: '2.5rem',
          mb: '1rem',
        }}
      >
        Order Details
      </h4>
      <div
        sx={{
          bg: '#F9FAFB',
          padding: '1.5rem',
          pt: '0rem',
          borderRadius: 'sm',
        }}
      >
        {cart?.map((item, index) => (
          <div
            key={index}
            sx={{
              display: 'flex',
              gap: '.75rem',
              borderBottom: '1px solid #E5E7EB',
              py: '1.5rem',
              position: 'relative',
            }}
          >
            <img
              sx={{
                height: '7.5rem',
                width: '6.25rem',
                objectFit: 'cover',
                borderRadius: 'sm',
              }}
              src={item.product.featuredImage?.node?.sourceUrl}
            />
            <Trash onClick={() => removeLineItem(item.product.databaseId)} />
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              }}
            >
              <span
                sx={{
                  fontWeight: 'bold',
                  pb: '.5rem',
                }}
              >
                {item.product.name}
              </span>
              <div>
                {item.meta_data?.map((meta_data, index) => (
                  <div key={index}>
                    {meta_data.key.toLowerCase() === 'color' ? (
                      <div
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        <span>{meta_data.key}:</span>
                        <span
                          sx={{
                            height: '1rem',
                            width: '1rem',
                            borderRadius: 'sm',
                            bg: meta_data.value,
                            display: 'inline-block',
                          }}
                        />
                      </div>
                    ) : meta_data.key.toLowerCase() === 'colour' ? (
                      <div
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '.4rem',
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        <span>{meta_data.key}:</span>
                        <span
                          sx={{
                            height: '1rem',
                            width: '1rem',
                            borderRadius: 'sm',
                            bg: meta_data.value,
                          }}
                        />
                      </div>
                    ) : (
                      <span
                        key={index}
                        sx={{
                          py: '.4rem',
                          color: '#4B5563',
                        }}
                      >
                        {meta_data.key}: {meta_data.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'space-between',
                  // mt: '1rem',
                }}
              >
                <span
                  sx={{
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}
                >
                  GH¢{parsePrice({ price: item?.product?.price })}
                </span>
                <Quantity
                  decrement={() =>
                    decrementQuantity({
                      product_id: item.product.databaseId,
                      quantity: item.quantity,
                    })
                  }
                  increment={() =>
                    incrementQuantity({
                      product_id: item.product.databaseId,
                      quantity: item.quantity,
                    })
                  }
                  value={item.quantity}
                />
              </div>
            </div>
          </div>
        ))}
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
          }}
        >
          <div
            sx={{
              mt: '1.5rem',
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span>Subtotal</span>
            <span>GH¢{subTotal.toFixed(2)}</span>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            my: '1.5rem',
          }}
        >
          <span>Shipping</span>
          <span>GH¢{deliveryMethod.total}</span>
        </div>
        <Divider />
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            fontSize: 'h4',
            mt: '1.5rem',
          }}
        >
          <span>Total</span>
          <span>GH¢{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

const Trash = (props) => {
  return (
    <svg
      {...props}
      sx={{ cursor: 'pointer', position: 'absolute', right: '0' }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 3.5L4.125 13.5C4.15469 14.0778 4.575 14.5 5.125 14.5H10.875C11.4272 14.5 11.8397 14.0778 11.875 13.5L12.5 3.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 3.5H13.5"
        stroke="#EF4444"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6 3.5V2.25C5.99971 2.15143 6.01892 2.05377 6.05651 1.96265C6.09409 1.87152 6.14933 1.78873 6.21903 1.71903C6.28873 1.64933 6.37153 1.59409 6.46265 1.55651C6.55378 1.51892 6.65143 1.49971 6.75 1.5H9.25001C9.34858 1.49971 9.44624 1.51892 9.53736 1.55651C9.62849 1.59409 9.71128 1.64933 9.78099 1.71903C9.85069 1.78873 9.90592 1.87152 9.94351 1.96265C9.9811 2.05377 10.0003 2.15143 10 2.25V3.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.5V12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 5.5L6 12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 5.5L10 12.5"
        stroke="#EF4444"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default OrderDetails
