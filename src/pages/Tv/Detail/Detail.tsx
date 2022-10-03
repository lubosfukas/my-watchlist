import { useContext, useEffect } from 'react'
import { Alert, AlertTitle, Container, useMediaQuery } from '@mui/material'
import { useParams } from 'react-router-dom'

import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import { device } from '../../../utils/device'
import {
    getAverageVote,
    getGenreNames,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../../../utils/helpers'
import { ContentMd } from './ContentMd'
import {
    CoveringSpinner,
    DetailMdSkeleton,
    DetailXs,
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
        return <CoveringSpinner />
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
    const genreNames = getGenreNames(data.genres)
    const listItems = [
        getReleaseDate(data.first_air_date),
        getRuntime(data.episode_run_time[0]),
        getAverageVote(data.vote_average),
    ]
    const trailer = getTrailer(data.videos['results'])

    if (isMd) return <ContentMd {...data} />
    return (
        <DetailXs
            backdropImageUrl={backdropImageUrl}
            description={data.overview}
            genres={genreNames}
            listItems={listItems}
            tagline={data.tagline}
            title={data.name}
            trailer={trailer}
        />
    )
}
