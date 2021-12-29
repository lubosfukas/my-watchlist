import { Box, Chip, Stack, Typography, useMediaQuery } from '@mui/material'

import { EmbeddedVideo } from '../EmbeddedVideo'
import { Poster } from '../Poster'
import {
    getAverageVote,
    getGenres,
    getPrice,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from './helpers'
import { MovieDetailDTO } from '../../types'
import { device } from '../../utils/device'

export const MovieDetailMobile = (props: MovieDetailDTO) => {
    const isLg = useMediaQuery(device.lg)
    const isMd = useMediaQuery(device.md)
    const isSm = useMediaQuery(device.sm)

    const genres = getGenres(props.genres)
    const trailer = getTrailer(props.videos['results'])

    return (
        <Stack m={isSm ? 2 : 1} py={1}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Poster
                    path={props['poster_path']}
                    title={props.title}
                    width={isLg ? 500 : isMd ? 400 : 300}
                />
            </Box>
            <Typography sx={{ mt: 2, mb: 1 }} variant={isMd ? 'h4' : 'h5'}>
                {props.title}
            </Typography>
            {props.tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {props.tagline}
                </Typography>
            )}
            <Typography sx={{ mb: 1 }} variant="body1">
                {props.overview}
            </Typography>
            <DetailItem
                label="Release date"
                value={getReleaseDate(props['release_date'])}
            />
            <DetailItem label="Runtime" value={getRuntime(props.runtime)} />
            <DetailItem label="Budget" value={getPrice(props.budget)} />
            <DetailItem label="Revenue" value={getPrice(props.revenue)} />
            <DetailItem
                label="Voting"
                value={getAverageVote(props['vote_average'])}
            />
            {genres && (
                <DetailItem
                    label="Genres"
                    component={
                        <Stack direction="row" flexWrap="wrap">
                            {genres.map((name) => (
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
            {trailer && (
                <DetailItem
                    label="Trailer"
                    component={
                        <EmbeddedVideo
                            title={props.title}
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
