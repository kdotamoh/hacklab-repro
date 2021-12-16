/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Link } from 'gatsby'
import day from 'dayjs'

/**
 *
 * @param {Object} props
 * @param {Object} props.post
 * @param {Number} props.index
 * @param {boolean} [props.hasFeaturedPost]
 */
const PostCard = ({ post, index, hasFeaturedPost }) => {
  const width = '31.881'
  return (
    <Link
      to={`/blog${post.node.uri}`}
      sx={{
        borderRadius: 'sm',
        textDecoration: 'none',
        color: 'neutral.black',
        display: 'flex',
        ...(hasFeaturedPost && index === 0
          ? {
              transform: ['scale(1.1)', 'scale(1)', 'scale(1)'],
              minHeight: '27rem',
              flexDirection: ['column', 'column', 'row'],
              flexBasis: '100%',
              mb: '5rem',
              bg: 'neutral.backgroundPressed',
            }
          : {
              flexDirection: 'column',
              flexBasis: `${width}%`,
              mb: '2.5rem',
              bg: 'neutral.backgroundHover',
            }),
      }}
    >
      <img
        sx={{
          objectFit: 'cover',
          borderTopLeftRadius: 'sm',
          ...(hasFeaturedPost && index === 0
            ? {
                borderBottomLeftRadius: 'sm',
                width: ['100%', '100%', `calc((2 * ${width}%) + 2.17%)`],
                height: '100%',
              }
            : {
                borderTopRightRadius: 'sm',
                width: '100%',
                height: '12.5rem',
              }),
        }}
        src={post.node.featuredImage?.node?.sourceUrl}
        alt=""
      />
      <div
        sx={{
          flex: '1 1 auto',
          ...(hasFeaturedPost && index === 0
            ? {
                display: 'flex',
                flexDirection: 'column',
                padding: ['1rem', '1rem', '2.5rem'],
              }
            : {
                padding: '1rem 1.5rem',
              }),
        }}
      >
        <span
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 'caption',
            letterSpacing: '.025rem',
            ...(hasFeaturedPost && index === 0
              ? {
                  color: 'neutral.textDisabled',
                }
              : {
                  color: 'primary',
                }),
          }}
        >
          {post.node.categories.nodes[0].name}
        </span>
        <div
          sx={{
            ...(hasFeaturedPost &&
              index === 0 && {
                flex: '1 1 auto',
              }),
          }}
        >
          <p
            sx={{
              py: '1rem',
              fontWeight: 'bold',
              lineHeight: 'h3',
              fontSize: 'h3',
            }}
            dangerouslySetInnerHTML={{ __html: post.node.title }}
          />
          {hasFeaturedPost && index === 0 && (
            <div
              sx={{
                fontSize: '1rem',
                color: 'neutral.textPlaceholder',
                mb: '2rem',
                p: {
                  lineHeight: 'paragraph1',
                },
              }}
              dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
            />
          )}
        </div>
        {hasFeaturedPost && index === 0 && (
          <div
            sx={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <span
              sx={{
                borderRadius: 'rounded',
                width: '2.5rem',
                height: '2.5rem',
                bg: 'primary',
              }}
            ></span>
            <div
              sx={{
                flex: 'display',
                flexDirection: 'column',
              }}
            >
              <p
                sx={{
                  fontSize: 'paragraph2',
                  fontWeight: 'bold',
                  pb: '.25rem',
                }}
              >
                {post.node.author.node.name}
              </p>
              <p
                sx={{
                  fontSize: 'paragraph2',
                  color: 'neutral.textDisabled',
                }}
              >
                Writer
              </p>
            </div>
          </div>
        )}
      </div>
      {hasFeaturedPost && index !== 0 && (
        <span
          sx={{
            px: '1.5rem',
            pb: '1.5rem',
            fontSize: 'paragraph2',
            color: 'neutral.textDisabled',
          }}
        >
          {day(post.node.date).format('MMM D')} | {post.node.tags.nodes[0].name}
        </span>
      )}
    </Link>
  )
}

export default PostCard
