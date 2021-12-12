import { useLocation } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { MovieScroll } from '../../components'
import { useSetPageTitle } from '../../hooks'
import { useFetchTopRatedMovies } from './api'

export const TopRated = () => {
    const { pathname } = useLocation()
    useSetPageTitle(pathname)

    const { data, isLoading, error, fetchNextPage, hasNextPage } =
        useFetchTopRatedMovies()

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
