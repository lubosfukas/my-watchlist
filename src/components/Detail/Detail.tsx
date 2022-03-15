import { useMediaQuery } from '@mui/material'

import { DetailMd } from './DetailMd/DetailMd'
import { DetailXs } from './DetailXs'
import { MovieDetailDTO } from '../../types'
import { device } from '../../utils/device'

export const Detail = (props: MovieDetailDTO) => {
    const isMd = useMediaQuery(device.md)

    if (isMd) return <DetailMd {...props} />
    return <DetailXs {...props} />
}
