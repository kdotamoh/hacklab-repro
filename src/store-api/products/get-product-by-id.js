import { client } from '../config'

export const getProductById = async (id) => {
  let { data } = await client.get(`/products/${id}`)
  return data
}

export const getProductBySlug = async (slug) => {
  let { data } = await client.get(`/products/?slug=${slug}`)
  return data[0]
}

export const getProductVariations = async (id) => {
  let { data } = await client.get(`/products/${id}/variations`)
  return data
}
