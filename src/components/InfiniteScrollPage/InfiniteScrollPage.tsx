import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'

import { useFetchMovies } from './hooks'
import { InfiniteScroll } from '../InfiniteScroll'
import { MovieContext } from '../../MovieContext'
import { routerMap } from '../../Router'
import { PaperSkeleton } from '../Paper'
import { device } from '../../utils/device'

export const getRoute = (pathname: string) =>
    Object.values(routerMap).find(
        (x) => pathname.split('/')[1] === x.path.split('/')[0]
    )

export const InfiniteScrollPage: React.FC<{ resource: string }> = ({
    resource,
}) => {
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
        useFetchMovies(resource)

    const isSm = useMediaQuery(device.sm)

    return (
        <Container sx={{ py: isSm ? 3 : 2 }}>
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
