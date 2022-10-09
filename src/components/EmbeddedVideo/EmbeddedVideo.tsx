/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { YOUTUBE_EMBED_URL } from '../../utils/constants'

export const EmbeddedVideo: React.FC<{
    title: string
    videoKey: string
}> = ({ title, videoKey }) => (
    <div
        css={css`
            position: relative;
            padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
            margin-bottom: 16px;
        `}
    >
        <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
            `}
            data-testid="embedded-video-frame"
            src={`${YOUTUBE_EMBED_URL}/${videoKey}`}
            title={title}
        />
    </div>
)
