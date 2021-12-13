import { graphql } from 'gatsby'

// Be sure to copy updates made here to createProducts.js
export const query = graphql`
  fragment ProductInformation on WpProduct {
    databaseId
    name
    slug
    attributes {
      nodes {
        label
        name
        options
        position
      }
    }
    galleryImages {
      nodes {
        sourceUrl
      }
    }
    localAttributes {
      nodes {
        name
      }
    }
    purchasable
    ... on WpSimpleProduct {
      name
      price
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
      crossSell {
        nodes {
          slug
          ... on WpSimpleProduct {
            name
            price
            uri
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      upsell {
        nodes {
          slug
          ... on WpSimpleProduct {
            name
            price
            uri
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`
