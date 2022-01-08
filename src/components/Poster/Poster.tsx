/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { API_IMAGE_BASE_URL } from '../../utils/constants'

type Props = {
    path: string
    title: string
}

const DEFAULT_WIDTH = 300

export const Poster = ({ title, path }: Props) => {
    const posterPath = `${API_IMAGE_BASE_URL}/w${DEFAULT_WIDTH}/${path}`
    const imageWidth = `${DEFAULT_WIDTH}px`

    return (
        <img
            alt={`Poster of ${title}`}
            aria-label="Poster"
            css={css`
                border-radius: 8px;
                height: 100%;
                width: ${imageWidth};
            `}
            data-testid="poster-image"
            src={posterPath}
        />
    )
}
