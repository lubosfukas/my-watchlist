import { useParams } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { useFetchMovieDetail } from './api'
import { MovieDetail } from '../../components'

export const Detail = () => {
    const { id } = useParams()

    const { data, isLoading, error } = useFetchMovieDetail(id || '')

    if (isLoading) return <CircularProgress />

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

    return <MovieDetail {...data} />
}
