/** @jsxImportSource @emotion/react */
import { Box, Chip, Grid, Container, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

import { EmbeddedVideo } from '../../EmbeddedVideo'
import { Poster } from '../../Poster'
import {
    getReleaseDate,
    getRuntime,
    getPrice,
    getAverageVote,
    getTrailer,
    getGenreNames,
} from '../helpers'
import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import { MovieDetailDTO } from '../../../types'

export const DetailMd = ({
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
    const backgroundImageUrl = `${API_IMAGE_BASE_URL}/original${otherProps['backdrop_path']}`
    const genreNames = getGenreNames(genres)
    const trailer = getTrailer(videos['results'])

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
                md={12}
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
                            <Grid item md="auto">
                                <Poster
                                    path={otherProps['poster_path']}
                                    title={title}
                                />
                            </Grid>
                            <Grid item md>
                                <Stack spacing={1}>
                                    <Typography variant="h4">
                                        <strong>{title}</strong>
                                    </Typography>
                                    <Typography sx={{ fontStyle: 'italic' }}>
                                        {tagline}
                                    </Typography>
                                    <Typography>{overview}</Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <DetailItem
                                            label="Release date"
                                            value={getReleaseDate(
                                                otherProps['release_date']
                                            )}
                                        />
                                        <DetailItem
                                            label="Runtime"
                                            value={getRuntime(runtime)}
                                        />
                                        <DetailItem
                                            label="Budget"
                                            value={getPrice(budget)}
                                        />
                                        <DetailItem
                                            label="Revenue"
                                            value={getPrice(revenue)}
                                        />
                                        <DetailItem
                                            label="Voting"
                                            value={getAverageVote(
                                                otherProps['vote_average']
                                            )}
                                        />
                                        {genreNames && genreNames.length > 0 && (
                                            <DetailItem
                                                label="Genres"
                                                component={
                                                    <Stack
                                                        direction="row"
                                                        flexWrap="wrap"
                                                    >
                                                        {genreNames.map(
                                                            (name) => (
                                                                <Chip
                                                                    color="secondary"
                                                                    key={name}
                                                                    label={name}
                                                                    sx={{
                                                                        mb: 1,
                                                                        mr: 1,
                                                                    }}
                                                                />
                                                            )
                                                        )}
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
            <Grid item md={12}>
                <Container sx={{ mt: 3 }}>
                    {trailer && (
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
