import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { useFetchNowPlayingMovies } from './api'
import { MovieScroll } from '../../components'
import { useSetPageTitle } from '../../hooks'
import { MovieContext } from '../../MovieContext'

export const NowPlaying = () => {
    const { setTitle } = useContext(MovieContext)
    const { pathname } = useLocation()
    useSetPageTitle(pathname, setTitle)

    const { data, isLoading, error, fetchNextPage, hasNextPage } =
        useFetchNowPlayingMovies()

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
