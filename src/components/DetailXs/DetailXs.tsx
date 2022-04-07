import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material'

import { BackdropImage } from '../BackdropImage'
import { MovieDetailDTO } from '../../types'
import { API_IMAGE_BASE_URL, YOUTUBE_WATCH_URL } from '../../utils/constants'
import {
    getAverageVote,
    getGenreNames,
    getPrice,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../../utils/helpers'
import { device } from '../../utils/device'

export const DetailXs: React.FC<MovieDetailDTO> = ({
    budget,
    genres,
    overview,
    revenue,
    runtime,
    tagline,
    title,
    videos,
    ...otherProps
}) => {
    const backdropImageUrl = `${API_IMAGE_BASE_URL}/original${otherProps['backdrop_path']}`
    const genreNames = getGenreNames(genres)
    const trailer = getTrailer(videos['results'])

    const isSm = useMediaQuery(device.sm)

    return (
        <Stack m={isSm ? 3 : 2}>
            <Typography sx={{ mb: 1 }} variant="h5">
                {title}
            </Typography>
            {tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {tagline}
                </Typography>
            )}
            <BackdropImage path={backdropImageUrl} title={title} />
            {trailer && (
                <Button
                    color="secondary"
                    onClick={() =>
                        window.location.assign(
                            `${YOUTUBE_WATCH_URL}?v=${trailer.key}`
                        )
                    }
                    sx={{ my: 1 }}
                    variant="contained"
                >
                    Watch trailer
                </Button>
            )}
            <Typography sx={{ mb: 1 }} variant="body1">
                {overview}
            </Typography>
            <DetailItem
                label="Release date"
                value={getReleaseDate(otherProps['release_date'])}
            />
            <DetailItem label="Runtime" value={getRuntime(runtime)} />
            <DetailItem label="Budget" value={getPrice(budget)} />
            <DetailItem label="Revenue" value={getPrice(revenue)} />
            <DetailItem
                label="Voting"
                value={getAverageVote(otherProps['vote_average'])}
            />
            {genreNames && (
                <DetailItem
                    label="Genres"
                    component={
                        <Stack direction="row" flexWrap="wrap">
                            {genreNames.map((name) => (
                                <Chip
                                    color="secondary"
                                    key={name}
                                    label={name}
                                    sx={{ mr: 1 }}
                                />
                            ))}
                        </Stack>
                    }
                />
            )}
        </Stack>
    )
}

const DetailItem = <T,>({
    label,
    value,
    component,
}: {
    label: string
    value?: T
    component?: JSX.Element
}) => (
    <Box sx={{ mb: 1 }}>
        <Typography gutterBottom variant="h6">
            {label}
        </Typography>
        {component}
        {!component && (
            <Typography aria-label={label} gutterBottom variant="body1">
                {value || '—'}
            </Typography>
        )}
    </Box>
)
