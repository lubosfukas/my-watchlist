import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'

import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import { device } from '../../../utils/device'
import {
    getAverageVote,
    getGenreNames,
    getReleaseYear,
    getRuntime,
    getTrailer,
    getWriting,
} from '../../../utils/helpers'
import {
    DetailMd,
    DetailMdSkeleton,
    DetailXs,
    DetailXsSkeleton,
} from '../../../components'
import { MovieContext } from '../../../MovieContext'
import { useFetchTvDetail } from './hooks'

export const Detail = () => {
    const { setTitle } = useContext(MovieContext)
    const { id } = useParams()

    const { data, error, isLoading } = useFetchTvDetail(id)

    useEffect(() => {
        if (data) {
            document.title = data.name
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
                    <AlertTitle>TV series not found!</AlertTitle>
                </Alert>
            </Container>
        )

    const backdropImageUrl = `${API_IMAGE_BASE_URL}/original${data.backdrop_path}`
    const directing = data.credits?.crew
        .filter(({ job }) => job === 'Director')
        .map(({ name }) => name)
        .join(', ')
    const genreNames = getGenreNames(data.genres)
    const listItems = [
        getReleaseYear(data.first_air_date),
        data.episode_run_time.length > 0
            ? getRuntime(data.episode_run_time[0])
            : `${data.number_of_episodes} ep`,
        getAverageVote(data.vote_average),
    ]
    const trailer = getTrailer(data.videos['results'])
    const writing = getWriting(data.credits.crew)

    if (isMd)
        return (
            <DetailMd
                backdropImageUrl={backdropImageUrl}
                description={data.overview}
                directing={directing}
                genres={genreNames}
                listItems={listItems}
                posterPath={data.poster_path}
                tagline={data.tagline}
                title={data.name}
                trailer={trailer}
                writing={writing}
            />
        )
    return (
        <DetailXs
            backdropImageUrl={backdropImageUrl}
            description={data.overview}
            directing={directing}
            genres={genreNames}
            listItems={listItems}
            tagline={data.tagline}
            title={data.name}
            trailer={trailer}
            writing={writing}
        />
    )
}
