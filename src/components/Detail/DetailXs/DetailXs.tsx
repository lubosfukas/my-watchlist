import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material'

import { EmbeddedVideo } from '../../EmbeddedVideo'
import { Poster } from '../../Poster'
import {
    getAverageVote,
    getGenreNames,
    getPrice,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../helpers'
import { MovieDetailDTO } from '../../../types'
import { device } from '../../../utils/device'
import { YOUTUBE_WATCH_URL } from '../../../utils/constants'

export const DetailXs = ({
    budget,
    genres,
    overview,
    revenue,
    runtime,
    tagline,
    title,
    videos,
    ...otherProps
}: MovieDetailDTO) => {
    const isSm = useMediaQuery(device.sm)

    const genreNames = getGenreNames(genres)
    const trailer = getTrailer(videos['results'])

    return (
        <Stack m={isSm ? 2 : 1} py={1}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Poster path={otherProps['poster_path']} title={title} />
            </Box>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
                {title}
            </Typography>
            {!isSm && trailer && (
                <Button
                    color="secondary"
                    onClick={() =>
                        window.location.assign(
                            `${YOUTUBE_WATCH_URL}?v=${trailer.key}`
                        )
                    }
                    sx={{ mb: 1 }}
                    variant="contained"
                >
                    Watch trailer
                </Button>
            )}
            {tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {tagline}
                </Typography>
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
                                    sx={{
                                        mb: 1,
                                        mr: 1,
                                    }}
                                />
                            ))}
                        </Stack>
                    }
                />
            )}
            {isSm && trailer && (
                <DetailItem
                    label="Trailer"
                    component={
                        <EmbeddedVideo
                            title={title}
                            videoKey={trailer['key']}
                        />
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
