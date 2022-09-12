import { Stack, Typography, useMediaQuery } from '@mui/material'

import {
    BackdropImage,
    DetailItem,
    GenreChips,
    EmbeddedVideo,
} from '../../../components'
import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import { device } from '../../../utils/device'
import {
    getAverageVote,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../../../utils/helpers'
import { TvDetailDTO } from '../../../types'

export const ContentXs = ({
    genres,
    name,
    overview,
    tagline,
    videos,
    ...otherProps
}: TvDetailDTO) => {
    const backdropImageUrl = `${API_IMAGE_BASE_URL}/original${otherProps['backdrop_path']}`
    const trailer = getTrailer(videos['results'])

    const isSm = useMediaQuery(device.sm)

    return (
        <Stack m={isSm ? 3 : 2}>
            <Typography sx={{ mb: 1 }} variant="h5">
                {name}
            </Typography>
            {tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {tagline}
                </Typography>
            )}
            {trailer ? (
                <EmbeddedVideo title={name} videoKey={trailer['key']} />
            ) : (
                <BackdropImage path={backdropImageUrl} title={name} />
            )}
            <Typography sx={{ mb: 1 }} variant="body1">
                {overview}
            </Typography>
            <DetailItem
                label="Release date"
                value={getReleaseDate(otherProps['first_air_date'])}
            />
            <DetailItem
                label="Runtime"
                value={getRuntime(otherProps['episode_run_time'][0])}
            />
            <DetailItem
                label="Seasons"
                value={otherProps['number_of_seasons']}
            />
            <DetailItem
                label="Episodes"
                value={otherProps['number_of_episodes']}
            />
            <DetailItem
                label="Voting"
                value={getAverageVote(otherProps['vote_average'])}
            />
            {genres.length > 0 && <GenreChips genres={genres} />}
        </Stack>
    )
}
