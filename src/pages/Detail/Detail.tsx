import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'

import { useFetchMovieDetail } from './hooks'
import {
    CoveringSpinner,
    DetailMd,
    DetailMdSkeleton,
    DetailXs,
} from '../../components'
import { MovieContext } from '../../MovieContext'
import { device } from '../../utils/device'

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetchMovieDetail(id)

    useEffect(() => {
        if (data) {
            document.title = data.title
            setTitle(data.title)
        }
    })

    const isSm = useMediaQuery(device.sm)
    const isMd = useMediaQuery(device.md)

    if (isLoading) {
        if (isMd) return <DetailMdSkeleton />
        return <CoveringSpinner />
    }

    if (error)
        return (
            <Container sx={{ py: isSm ? 3 : 2 }}>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data)
        return (
            <Container sx={{ py: isSm ? 3 : 2 }}>
                <Alert severity="info">
                    <AlertTitle>Movie not found!</AlertTitle>
                </Alert>
            </Container>
        )

    if (isMd) return <DetailMd {...data} />
    return <DetailXs {...data} />
}
