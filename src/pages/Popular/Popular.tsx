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

    const isTabletOrLarger = useMediaQuery(device.tablet)

    const { data, error, fetchNextPage, hasNextPage, isError, isLoading } =
        useFetchLatestMovies()

    if (isLoading)
        return (
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: isTabletOrLarger ? 2 : 1,
                }}
            >
                <CircularProgress />
            </Container>
        )

    if (isError)
        return (
            <Container maxWidth="xl" sx={{ py: isTabletOrLarger ? 2 : 1 }}>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data || data.results.length === 0)
        return (
            <Container maxWidth="xl" sx={{ py: isTabletOrLarger ? 2 : 1 }}>
                <Alert severity="info">
                    <AlertTitle>No results found!</AlertTitle>
                </Alert>
            </Container>
        )

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                py: isTabletOrLarger ? 2 : 1,
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
