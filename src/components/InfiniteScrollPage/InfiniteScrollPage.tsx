import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container } from '@mui/material'
import { useLocation } from 'react-router-dom'

import { useFetchMedia } from './hooks'
import { InfiniteScroll } from '../InfiniteScroll'
import { MovieContext } from '../../MovieContext'
import { routes } from '../../Router'
import { PaperSkeleton } from '../Paper'

export const getRoute = (pathname: string) =>
    Object.values(routes.movie).find(
        ({ path }) => pathname.split('/')[1] === path.split('/')[0]
    )

export const InfiniteScrollPage: React.FC<{
    url: string
}> = ({ url }) => {
    const { setTitle } = useContext(MovieContext)
    const { pathname } = useLocation()

    useEffect(() => {
        const title = getRoute(pathname)?.name

        if (title) {
            document.title = title
            setTitle(title)
        }
    }, [pathname, setTitle])

    const { data, error, fetchNextPage, hasNextPage, isError, isLoading } =
        useFetchMedia(url)

    return (
        <Container>
            {isLoading && <PaperSkeleton />}
            {!isLoading && isError && (
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            )}
            {!isLoading && !isError && (!data || data.results.length === 0) && (
                <Alert severity="info">
                    <AlertTitle>No results found!</AlertTitle>
                </Alert>
            )}
            {!isLoading && !isError && data && data.results.length > 0 && (
                <InfiniteScroll
                    movies={data.results}
                    moreMovies={hasNextPage || false}
                    fetchNextPage={fetchNextPage}
                />
            )}
        </Container>
    )
}
