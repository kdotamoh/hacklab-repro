/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Container, Button } from 'theme-ui'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'

import PlayVideo from '../../svg/PlayVideo'

const ContentBlock = ({
  content,
  image,
  textPosition,
  buttons,
  imageFit,
  youtubeVideo,
  ...props
}) => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateAreas:
          textPosition === 'left'
            ? [
                `"content"
                 "media"`,
                `"content"
                 "media"`,
                `'content media'`,
              ]
            : [
                `"content"
                 "media"`,
                `"content"
                 "media"`,
                `'media content'`,
              ],
        gridTemplateColumns: ['100%', '100%', '50% 1fr'],
        gap: '0 5rem',
        alignItems: 'center',
        py: '5rem',
        width: ['92%', '92%', '82%'],
      }}
    >
      <div
        sx={{
          gridArea: 'content',
          py: '2rem',
        }}
      >
        <div
          sx={{
            mb: '2.5rem',
            h2: {
              pb: '2.5rem',
            },
            h3: {
              pb: '2.5rem',
            },
            li: {
              marginLeft: '1.5rem',
              py: ['.5rem', '.5rem', '1rem'],
              lineHeight: 'h3',
            },
            p: {
              lineHeight: 'h3',
            },
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: content.replace(/&nbsp;/g, ' ') }}
        />
        {buttons && (
          <div
            sx={{
              display: 'flex',
              gap: '.75rem',
            }}
          >
            {buttons.map((button, index) => (
              <>
                {/* Check whether the link is styled like a button */}
                {button.buttonVariant === 'link' ? (
                  <>
                    {/* Check whether the link is to an external website */}
                    {button.outbound ? (
                      <a
                        sx={{
                          fontWeight: 'bold',
                          color: 'primary',
                          textDecoration: 'none',
                        }}
                        href={button.linkUrl}
                      >
                        {button.buttonText}
                      </a>
                    ) : (
                      <Link
                        sx={{
                          fontWeight: 'bold',
                          color: 'primary',
                          textDecoration: 'none',
                        }}
                        to={button.pageLink?.link}
                      >
                        {button.buttonText}
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    {/* Check whether the link is to an external website */}
                    {button.outbound ? (
                      <a href={button.linkUrl}>
                        <Button variant={button.buttonVariant}>
                          {button.buttonText}
                        </Button>
                      </a>
                    ) : (
                      <Link key={index} to={button.pageLink?.link}>
                        <Button variant={button.buttonVariant}>
                          {button.buttonText}
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </>
            ))}
          </div>
        )}
      </div>
      {image && (
        <img
          sx={{
            gridArea: 'media',
            width: '100%',
            objectFit: imageFit,
            height: 'auto',
            minHeight: ['20rem', '20rem', '32.5rem'],
            borderRadius: 'md',
          }}
          src={image?.sourceUrl}
          alt=""
        />
      )}
      {youtubeVideo?.videoId && (
        <div
          sx={{
            gridArea: 'media',
          }}
        >
          <div
            sx={{
              cursor: 'pointer',
              borderRadius: 'md',
              display: 'grid',
              '::after': {
                content: '""',
                backgroundColor: '#000',
                opacity: '0.4',
                gridArea: '1/-1',
                borderRadius: 'md',
              },
              '&:hover': {
                '.play-button': {
                  transform: 'scale(1.1)',
                },
              },
            }}
            onClick={() => setOpen(true)}
          >
            <PlayVideo
              className="play-button"
              sx={{
                width: '3rem',
                height: '3rem',
                gridArea: '1/-1',
                margin: 'auto',
                zIndex: '1',
                transform: 'scale(1)',
                transition: 'ease-in-out all 0.25s',
              }}
            />
            <img
              sx={{
                gridArea: '1/-1',
                width: '100%',
                objectFit: imageFit,
                height: 'auto',
                minHeight: ['20rem', '20rem', '32.5rem'],
                borderRadius: 'md',
              }}
              src={youtubeVideo?.thumbnail?.sourceUrl}
              alt=""
            />
          </div>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={youtubeVideo.videoId}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </Container>
  )
}

export default ContentBlock
