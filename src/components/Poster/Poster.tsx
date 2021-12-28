/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { API_IMAGE_BASE_URL } from '../../utils/constants'

type Props = {
    path: string
    title: string
    width?: 300 | 400 | 500
}

export const Poster = ({ title, path, width = 300 }: Props) => {
    const posterPath = `${API_IMAGE_BASE_URL}/w${width}/${path}`

    let imageWidth = '300px'
    switch (width) {
        case 300:
            imageWidth = '300px'
            break
        case 400:
            imageWidth = '400px'
            break
        case 500:
            imageWidth = '500px'
            break
        default:
            imageWidth = '300px'
            break
    }

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
