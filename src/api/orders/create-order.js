import { client } from '../config'

export const createOrder = async (payload) => {
  let { data } = await client.post(`/orders`, payload)
  return data
}
