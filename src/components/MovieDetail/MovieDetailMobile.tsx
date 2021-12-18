import { Box, Chip, Stack, Typography, useMediaQuery } from '@mui/material'

import { Poster } from '../Poster'
import { MovieDetailDTO } from '../../types'
import { getAverageVote, getPrice, getReleaseDate, getRuntime } from './utils'
import { device } from '../../utils/device'

export const MovieDetailMobile = (props: MovieDetailDTO) => {
    const isLaptopOrLarger = useMediaQuery(device.laptop)
    const isTabletOrLarger = useMediaQuery(device.tablet)
    const isMobileOrLarger = useMediaQuery(device.mobileM)

    const genres =
        props.genres.length !== 0 ? props.genres.map((g) => g.name) : []

    return (
        <Stack m={isMobileOrLarger ? 2 : 1} py={1}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Poster
                    path={props['poster_path']}
                    title={props['title']}
                    width={
                        isLaptopOrLarger ? 500 : isTabletOrLarger ? 400 : 300
                    }
                />
            </Box>
            <Typography
                sx={{ mt: 2, mb: 1 }}
                variant={isTabletOrLarger ? 'h4' : 'h5'}
            >
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
                value={getReleaseDate(props.release_date)}
            />
            <DetailItem label="Runtime" value={getRuntime(props['runtime'])} />
            <DetailItem label="Budget" value={getPrice(props['budget'])} />
            <DetailItem label="Revenue" value={getPrice(props['revenue'])} />
            <DetailItem
                label="Voting"
                value={getAverageVote(props['vote_average'])}
            />
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
