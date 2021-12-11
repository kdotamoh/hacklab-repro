import { graphql } from 'gatsby'

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
    image {
      sourceUrl
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
          image {
            sourceUrl
          }
          ... on WpSimpleProduct {
            name
            price
            uri
          }
        }
      }
      upsell {
        nodes {
          slug
          image {
            sourceUrl
          }
          ... on WpSimpleProduct {
            name
            price
            uri
          }
        }
      }
    }
  }
`
