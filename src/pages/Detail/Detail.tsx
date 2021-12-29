import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { useFetchMovieDetail } from './api'
import { Detail as DetailComponent } from '../../components'
import { MovieContext } from '../../MovieContext'

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, isLoading, error } = useFetchMovieDetail(id || '')

    useEffect(() => {
        if (data) {
            document.title = data.title
            setTitle(data.title)
        }
    })

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

    return <DetailComponent {...data} />
}
