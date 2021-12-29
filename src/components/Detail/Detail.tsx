import { useMediaQuery } from '@mui/material'

import { DetailDesktop } from './DetailDesktop'
import { DetailMobile } from './DetailMobile'
import { MovieDetailDTO } from '../../types'
import { device } from '../../utils/device'

export const Detail = (props: MovieDetailDTO) => {
    const isLg = useMediaQuery(device.lg)

    if (isLg) return <DetailDesktop {...props} />
    return <DetailMobile {...props} />
}
