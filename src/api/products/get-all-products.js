import { client } from '../config'

export const getAllProducts = async () => {
  let { data } = await client.get(`/products`)
  return data
}
