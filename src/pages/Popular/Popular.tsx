import { useLocation } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { MovieScroll } from '../../components'
import { useFetchLatestMovies } from './api'
import { useSetPageTitle } from '../../hooks'

export const Popular = () => {
    const { pathname } = useLocation()
    useSetPageTitle(pathname)

    const { data, isLoading, error, fetchNextPage, hasNextPage } =
        useFetchLatestMovies()

    if (isLoading) return <CircularProgress />

    if (error)
        return (
            <Alert severity="error">
                <AlertTitle>{error}</AlertTitle>
            </Alert>
        )

    if (!data || data.results.length === 0)
        return (
            <Alert severity="info">
                <AlertTitle>No results found!</AlertTitle>
            </Alert>
        )

    return (
        <MovieScroll
            movies={data.results}
            moreMovies={hasNextPage || false}
            fetchNextPage={fetchNextPage}
        />
    )
}
