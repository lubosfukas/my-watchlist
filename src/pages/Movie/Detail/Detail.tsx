import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'

import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import {
    DetailMd,
    DetailMdSkeleton,
    DetailXs,
    DetailXsSkeleton,
} from '../../../components'
import { MovieContext } from '../../../MovieContext'
import { device } from '../../../utils/device'
import {
    getAverageVote,
    getGenreNames,
    getReleaseYear,
    getRuntime,
    getTrailer,
    getWriting,
} from '../../../utils/helpers'
import { useFetchMovieDetail } from './hooks'

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetchMovieDetail(id)

    useEffect(() => {
        if (data) {
            document.title = data.title
            setTitle('')
        }
    })

    const isMd = useMediaQuery(device.md)

    if (isLoading) {
        if (isMd) return <DetailMdSkeleton />
        return <DetailXsSkeleton />
    }

    if (error)
        return (
            <Container>
                <Alert severity="error">
                    <AlertTitle>{error}</AlertTitle>
                </Alert>
            </Container>
        )

    if (!data)
        return (
            <Container>
                <Alert severity="info">
                    <AlertTitle>Movie not found!</AlertTitle>
                </Alert>
            </Container>
        )

    const averageVote = getAverageVote(data.vote_average)
    const backdropImageUrl = `${API_IMAGE_BASE_URL}/original${data.backdrop_path}`
    const cast = data.credits.cast
        .slice(0, 5)
        .map(({ name }) => name)
        .join(', ')
    const directing = data.credits.crew
        .filter(({ job }) => job === 'Director')
        .map(({ name }) => name)
        .join(', ')
    const genreNames = getGenreNames(data.genres)
    const listItems = [
        getReleaseYear(data.release_date),
        getRuntime(data.runtime),
        averageVote,
    ]
    const trailer = getTrailer(data.videos.results)
    const writing = getWriting(data.credits.crew)
    const detailItems = [
        { label: 'Directing', value: directing },
        { label: 'Writing', value: writing },
        { label: 'Cast', value: cast },
    ]

    if (isMd)
        return (
            <DetailMd
                backdropImageUrl={backdropImageUrl}
                description={data.overview}
                detailItems={detailItems}
                genres={genreNames}
                listItems={listItems}
                posterPath={data.poster_path}
                tagline={data.tagline}
                title={data.title}
                trailer={trailer}
            />
        )
    return (
        <DetailXs
            backdropImageUrl={backdropImageUrl}
            cast={cast}
            description={data.overview}
            detailItems={detailItems}
            directing={directing}
            genres={genreNames}
            listItems={listItems}
            tagline={data.tagline}
            title={data.title}
            trailer={trailer}
            writing={writing}
        />
    )
}
