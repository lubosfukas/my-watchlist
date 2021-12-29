import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
    Alert,
    AlertTitle,
    CircularProgress,
    Container,
    useMediaQuery,
} from '@mui/material'

import { useFetchMovies } from './hooks'
import { InfiniteScroll } from '..'
import { MovieContext } from '../../MovieContext'
import { device } from '../../utils/device'
import { getRoute } from '../../utils/helpers'

type Props = {
    resource: string
}

export const InfiniteScrollPage: React.FC<Props> = ({ resource }) => {
    const { setTitle } = useContext(MovieContext)
    const { pathname } = useLocation()

    useEffect(() => {
        const title = getRoute(pathname)?.name

        if (title) {
            document.title = title
            setTitle(title)
        }
    }, [pathname, setTitle])

    const isSm = useMediaQuery(device.sm)
    const isXl = useMediaQuery(device.xl)

    const { data, error, fetchNextPage, hasNextPage, isError, isLoading } =
        useFetchMovies(resource)

    const renderContent = () => {
        if (isLoading) return <CircularProgress />

        if (isError)
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
            <InfiniteScroll
                movies={data.results}
                moreMovies={hasNextPage || false}
                fetchNextPage={fetchNextPage}
            />
        )
    }

    return (
        <Container
            disableGutters={isXl}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                py: isSm ? 2 : 1,
            }}
        >
            {renderContent()}
        </Container>
    )
}
