/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { YOUTUBE_EMBED_URL } from '../../utils/constants'

export const EmbeddedVideo = ({
    title,
    videoKey,
}: {
    title: string
    videoKey: string
}) => (
    <iframe
        allow="autoplay; encrypted-media"
        allowFullScreen
        css={css`
            border: 0;
        `}
        data-testid="embedded-video-frame"
        height={360}
        src={`${YOUTUBE_EMBED_URL}/${videoKey}`}
        title={title}
        width={640}
    />
)
