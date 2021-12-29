/** @jsxImportSource @emotion/react */

import { Box, Chip, Grid, Container, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

import { EmbeddedVideo } from '../EmbeddedVideo'
import { Poster } from '../Poster'
import {
    getReleaseDate,
    getRuntime,
    getPrice,
    getAverageVote,
    getTrailer,
    getGenres,
} from './helpers'
import { MovieDetailDTO } from '../../types'
import { API_IMAGE_BASE_URL } from '../../utils/constants'

export const DetailDesktop = (props: MovieDetailDTO) => {
    const backgroundImageUrl = `${API_IMAGE_BASE_URL}/original${props['backdrop_path']}`
    const releaseYear = props['release_date'].split('-')[0]
    const genres = getGenres(props.genres)
    const trailer = getTrailer(props.videos['results'])

    return (
        <Grid container>
            <Grid
                css={css`
                    background-image: url(${backgroundImageUrl});
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 500px;
                    position: relative;
                `}
                item
                lg={12}
            >
                <Box
                    css={css`
                        background: linear-gradient(
                            to bottom right,
                            rgba(96.47%, 96.47%, 96.47%, 1),
                            rgba(96.47%, 96.47%, 96.47%, 0.84)
                        );
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 100%;
                        width: 100%;
                    `}
                >
                    <Container
                        sx={{
                            height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container columnSpacing={3}>
                            <Grid item>
                                <Poster
                                    path={props['poster_path']}
                                    title={props.title}
                                />
                            </Grid>
                            <Grid item lg={8}>
                                <Stack spacing={1}>
                                    <Typography variant="h4">
                                        <strong>{props.title}</strong> {'('}
                                        {releaseYear}
                                        {')'}
                                    </Typography>
                                    <Typography sx={{ fontStyle: 'italic' }}>
                                        {props.tagline}
                                    </Typography>
                                    <Typography>{props.overview}</Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <DetailItem
                                            label="Release date"
                                            value={getReleaseDate(
                                                props['release_date']
                                            )}
                                        />
                                        <DetailItem
                                            label="Runtime"
                                            value={getRuntime(props.runtime)}
                                        />
                                        <DetailItem
                                            label="Budget"
                                            value={getPrice(props.budget)}
                                        />
                                        <DetailItem
                                            label="Revenue"
                                            value={getPrice(props.revenue)}
                                        />
                                        <DetailItem
                                            label="Voting"
                                            value={getAverageVote(
                                                props['vote_average']
                                            )}
                                        />
                                        {genres && (
                                            <DetailItem
                                                label="Genres"
                                                component={
                                                    <Stack
                                                        direction="row"
                                                        flexWrap="wrap"
                                                    >
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
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
            <Grid item lg={12}>
                <Container sx={{ mt: 3 }}>
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
                </Container>
            </Grid>
        </Grid>
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
    <Box sx={{ flex: '1 50%' }}>
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
