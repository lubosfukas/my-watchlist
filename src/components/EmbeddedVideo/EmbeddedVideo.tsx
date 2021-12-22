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
    const isTabletOrLarger = useMediaQuery(device.tablet)
    const width = isTabletOrLarger ? 640 : 300
    const height = isTabletOrLarger ? 360 : 160

    return (
        <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen
            css={css`
                border: 0;
            `}
            data-testid="embedded-video-frame"
            height={height}
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={title}
            width={width}
        />
    )
}
