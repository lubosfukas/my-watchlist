import { useMediaQuery } from '@mui/material'

import { MovieDetailDesktop } from './MovieDetailDesktop'
import { MovieDetailMobile } from './MovieDetailMobile'
import { MovieDetailDTO } from '../../types'
import { device } from '../../utils/device'

export const MovieDetail = (props: MovieDetailDTO) => {
    const isLg = useMediaQuery(device.lg)

    if (isLg) return <MovieDetailDesktop {...props} />
    return <MovieDetailMobile {...props} />
}
