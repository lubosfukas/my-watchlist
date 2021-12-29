/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

import { device } from '../../utils/device'

export const EmbeddedVideo = ({
    title,
    videoKey,
}: {
    title: string
    videoKey: string
}) => {
    const isMd = useMediaQuery(device.md)

    return (
        <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            css={css`
                border: 0;
            `}
            data-testid="embedded-video-frame"
            height={isMd ? 360 : 160}
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={title}
            width={isMd ? 640 : 300}
        />
    )
}
