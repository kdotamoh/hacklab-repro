/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Link } from 'gatsby'
import parsePrice from '../../../utils/parsePrice'

const ProductCard = ({ item }) => {
  const width = '31.881'

  return (
    <Link
      sx={{
        flexBasis: ['100%', '100%', `${width}%`],
        borderTopLeftRadius: 'sm',
        borderTopRightRadius: 'sm',
        pb: '1rem',
        textDecoration: 'none',
      }}
      to={`/store${item.uri}`}
    >
      <img
        sx={{
          width: '100%',
          height: '18rem',
          objectFit: 'cover',
          borderTopLeftRadius: 'sm',
          borderTopRightRadius: 'sm',
        }}
        src={item.featuredImage?.node?.sourceUrl}
        alt=""
      />
      <p
        sx={{
          fontWeight: 'medium',
          pt: '1rem',
          pb: '1rem',
          color: 'neutral.black',
        }}
        dangerouslySetInnerHTML={{ __html: item.name }}
      />
      <p
        sx={{
          fontWeight: 'bold',
          color: 'neutral.black',
        }}
      >
        GH¢{parsePrice({ price: item.price })}
      </p>
    </Link>
  )
}

export default ProductCard
