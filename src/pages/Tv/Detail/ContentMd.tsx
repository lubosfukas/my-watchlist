import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'

import {
    BackgroundImage,
    DetailItem,
    EmbeddedVideo,
    GenreChips,
    Poster,
} from '../../../components'
import { API_IMAGE_BASE_URL } from '../../../utils/constants'
import {
    getAverageVote,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../../../utils/helpers'
import { TvDetailDTO } from '../../../types'

const EmbeddedVideoWrapper = styled.div`
    height: 360px;
    width: 640px;
`

export const ContentMd = ({
    genres,
    name,
    overview,
    tagline,
    videos,
    ...otherProps
}: TvDetailDTO) => {
    if (!otherProps['backdrop_path']) return <div />

    const backgroundImageUrl = `${API_IMAGE_BASE_URL}/original${otherProps['backdrop_path']}`
    const trailer = getTrailer(videos['results'])

    return (
        <Grid container>
            <BackgroundImage imageUrl={backgroundImageUrl}>
                <Grid container columnSpacing={3}>
                    <Grid item md="auto">
                        {otherProps['poster_path'] && (
                            <Poster
                                path={otherProps['poster_path']}
                                title={name}
                            />
                        )}
                    </Grid>
                    <Grid item md>
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                <strong>{name}</strong>
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
                                        otherProps['first_air_date']
                                    )}
                                />
                                <DetailItem
                                    label="Episode runtime"
                                    value={getRuntime(
                                        otherProps['episode_run_time'][0]
                                    )}
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
                                    value={getAverageVote(
                                        otherProps['vote_average']
                                    )}
                                />
                                {genres.length > 0 && (
                                    <GenreChips genres={genres} />
                                )}
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </BackgroundImage>
            <Grid item md={12}>
                <Container>
                    {trailer && (
                        <DetailItem
                            label="Trailer"
                            component={
                                <EmbeddedVideoWrapper>
                                    <EmbeddedVideo
                                        title={name}
                                        videoKey={trailer['key']}
                                    />
                                </EmbeddedVideoWrapper>
                            }
                        />
                    )}
                </Container>
            </Grid>
        </Grid>
    )
}
