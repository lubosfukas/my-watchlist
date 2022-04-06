import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container } from '@mui/material'
import { useLocation } from 'react-router-dom'

import { useFetchMedia } from './hooks'
import { InfiniteScroll } from '../InfiniteScroll'
import { MovieContext } from '../../MovieContext'
import { PaperSkeleton } from '../Paper'
import { getRoute } from '../../utils/helpers'

export const InfiniteScrollPage: React.FC<{
    url: string
}> = ({ url }) => {
    const { setTitle } = useContext(MovieContext)
    const { pathname } = useLocation()

    useEffect(() => {
        const title = getRoute(pathname)

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
                    media={data.results}
                    moreMedia={hasNextPage || false}
                    fetchNextPage={fetchNextPage}
                />
            )}
        </Container>
    )
}
