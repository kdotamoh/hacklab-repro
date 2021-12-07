import axios from 'axios'
import addOAuthInterceptor from 'axios-oauth-1.0a'

const baseURL = `${process.env.SERVER_ADDRESS}/wp-json/wc/v3`

export const client = axios.create({
  baseURL: baseURL,
  responseType: 'json',
})

console.log('baseURL', baseURL)

addOAuthInterceptor(client, {
  key: process.env.WOOCOMMERCE_CONSUMER_KEY,
  secret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  algorithm: 'HMAC-SHA1',
})
