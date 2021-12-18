import { useMediaQuery } from '@mui/material'

import { MovieDetailDesktop } from './MovieDetailDesktop'
import { MovieDetailMobile } from './MovieDetailMobile'
import { MovieDetailDTO } from '../../types'
import { device } from '../../utils/device'

export const MovieDetail = (props: MovieDetailDTO) => {
    const isLaptopOrLarger = useMediaQuery(device.laptopL)

    if (isLaptopOrLarger) return <MovieDetailDesktop {...props} />

    return <MovieDetailMobile {...props} />
}
