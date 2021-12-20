import axios from 'axios'
import addOAuthInterceptor from 'axios-oauth-1.0a'

const baseURL = `${process.env.GATSBY_SERVER_ADDRESS}/wp-json/wc/v3`

export const client = axios.create({
  baseURL: baseURL,
  responseType: 'json',
})

addOAuthInterceptor(client, {
  key: process.env.GATSBY_WOOCOMMERCE_CONSUMER_KEY,
  secret: process.env.GATSBY_WOOCOMMERCE_CONSUMER_SECRET,
  algorithm: 'HMAC-SHA1',
})
