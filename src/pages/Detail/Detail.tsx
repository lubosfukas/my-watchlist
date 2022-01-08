import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Alert,
    AlertTitle,
    Box,
    Container,
    CircularProgress,
    useMediaQuery,
} from '@mui/material'
import styled from '@emotion/styled'

import { useFetchMovieDetail } from './api'
import { Detail as DetailComponent, DetailSkeleton } from '../../components'
import { MovieContext } from '../../MovieContext'
import { device } from '../../utils/device'

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetchMovieDetail(id || '')

    useEffect(() => {
        if (data) {
            document.title = data.title
            setTitle(data.title)
        }
    })

    const isLg = useMediaQuery(device.lg)
    const isSm = useMediaQuery(device.sm)

    if (isLoading) {
        if (isLg) return <DetailSkeleton />
        return (
            <StyledBox>
                <CircularProgress />
            </StyledBox>
        )
    }

    if (error)
        return (
            <Container sx={{ py: isSm ? 2 : 1 }}>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data)
        return (
            <Container sx={{ py: isSm ? 2 : 1 }}>
                <Alert severity="info">
                    <AlertTitle>Movie not found!</AlertTitle>
                </Alert>
            </Container>
        )

    return <DetailComponent {...data} />
}
