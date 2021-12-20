export default function ({ price }) {
  // remove the Ghana cedi currency symbol WooCommerce prepends
  return Number(price?.substring(1)).toFixed(2)
}
