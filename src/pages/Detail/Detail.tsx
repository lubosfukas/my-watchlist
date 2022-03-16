import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'

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

    const isMd = useMediaQuery(device.md)

    if (isLoading) {
        if (isMd) return <DetailMdSkeleton />
        return <CoveringSpinner />
    }

    if (error)
        return (
            <Container>
                <Alert severity="error" sx={{ my: 2 }}>
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data)
        return (
            <Container>
                <Alert severity="info" sx={{ my: 2 }}>
                    <AlertTitle>Movie not found!</AlertTitle>
                </Alert>
            </Container>
        )

    if (isMd) return <DetailMd {...data} />
    return <DetailXs {...data} />
}
