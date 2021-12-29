import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import {
    Alert,
    AlertTitle,
    CircularProgress,
    Container,
    useMediaQuery,
} from '@mui/material'

import { useFetchLatestMovies } from './api'
import { MovieScroll } from '../../components'
import { useSetPageTitle } from '../../hooks'
import { MovieContext } from '../../MovieContext'
import { device } from '../../utils/device'

export const Popular = () => {
    const { setTitle } = useContext(MovieContext)
    const { pathname } = useLocation()
    useSetPageTitle(pathname, setTitle)

    const isSm = useMediaQuery(device.sm)
    const isXl = useMediaQuery(device.xl)

    const { data, error, fetchNextPage, hasNextPage, isError, isLoading } =
        useFetchLatestMovies()

    if (isLoading)
        return (
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: isSm ? 2 : 1,
                }}
            >
                <CircularProgress />
            </Container>
        )

    if (isError)
        return (
            <Container sx={{ py: isSm ? 2 : 1 }}>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data || data.results.length === 0)
        return (
            <Container sx={{ py: isSm ? 2 : 1 }}>
                <Alert severity="info">
                    <AlertTitle>No results found!</AlertTitle>
                </Alert>
            </Container>
        )

    return (
        <Container
            disableGutters={isXl}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                py: isSm ? 2 : 1,
            }}
        >
            <MovieScroll
                movies={data.results}
                moreMovies={hasNextPage || false}
                fetchNextPage={fetchNextPage}
            />
        </Container>
    )
}
