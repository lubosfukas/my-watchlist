import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

import { MovieScroll } from '../../components'
import { useFetchLatestMovies } from './api'
import { routes } from '../../Router'

export const Popular = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const title = routes.find((x) => pathname === `/${x.path}`)?.name

        if (title) document.title = title
    }, [pathname])

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
