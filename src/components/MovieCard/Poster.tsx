/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { API_IMAGE_BASE_URL } from '../../utils/constants'

type Props = {
    path: string
    title: string
    width: number
}

export const Poster = ({ title, path, width }: Props) => {
    const posterPath = `${API_IMAGE_BASE_URL}/w${width}/${path}`

    return (
        <img
            css={css`
                height: 100%;
                width: ${width};
            `}
            alt={`Poster of ${title}`}
            src={posterPath}
            aria-label="Poster"
        />
    )
}
