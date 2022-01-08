import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Alert,
    AlertTitle,
    CircularProgress,
    useMediaQuery,
} from '@mui/material'

import { useFetchMovieDetail } from './api'
import { Detail as DetailComponent, DetailSkeleton } from '../../components'
import { MovieContext } from '../../MovieContext'
import { device } from '../../utils/device'

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

    if (isLoading) {
        if (isLg) return <DetailSkeleton />
        return <CircularProgress />
    }

    if (error)
        return (
            <Alert severity="error">
                <AlertTitle>{error}</AlertTitle>
            </Alert>
        )

    if (!data)
        return (
            <Alert severity="info">
                <AlertTitle>Movie not found!</AlertTitle>
            </Alert>
        )

    return <DetailComponent {...data} />
}
