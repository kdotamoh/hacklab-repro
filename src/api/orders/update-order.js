import { client } from '../config'

/**
 * @param {object} props - Properties passed to function
 * @param {number} props.id - Order ID
 * @param {object} props.payload - eg. { status: "processing", set_paid: "true" }
 */
export const updateOrderStatus = async ({ order_id, payload }) => {
  let { data } = await client.put(`/orders/${order_id}`, payload)
  return data
}
