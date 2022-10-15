/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'

import { GenreChips } from '../GenreChips'
import { List, Props as ListProps } from '../List'
import { Poster } from '../Poster'
import { Video } from '../../types'
import { YOUTUBE_WATCH_URL } from '../../utils/constants'

type Props = {
    backdropImageUrl: string
    description: string
    genres: Array<string>
    posterPath: string
    tagline: string
    title: string
    trailer?: Video
} & Pick<ListProps, 'listItems'>

export const DetailMd: React.FC<Props> = ({
    backdropImageUrl,
    description,
    genres,
    listItems,
    posterPath,
    tagline,
    title,
    trailer,
}) => {
    const height = trailer ? 530 : 500

    return (
        <Grid container>
            <Grid
                css={css`
                    background-image: url(${backdropImageUrl});
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: ${height}px;
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
                            height: `${height}px`,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container columnSpacing={3}>
                            <Grid item md="auto">
                                <Stack>
                                    <Poster
                                        path={posterPath}
                                        title={title}
                                        hasButton={!!trailer}
                                    />
                                    {trailer && (
                                        <Button
                                            href={`${YOUTUBE_WATCH_URL}?v=${trailer.key}`}
                                            target="_blank"
                                            color="secondary"
                                            startIcon={<PlayArrow />}
                                            variant="contained"
                                            type="button"
                                            sx={{
                                                borderRadius: '0 0 16px 16px',
                                            }}
                                        >
                                            Watch trailer
                                        </Button>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item md>
                                <Stack spacing={1}>
                                    <Typography variant="h4">
                                        <strong>{title}</strong>
                                    </Typography>
                                    <List listItems={listItems} />
                                    {tagline && (
                                        <Typography
                                            sx={{ fontStyle: 'italic' }}
                                        >
                                            {tagline}
                                        </Typography>
                                    )}
                                    <Typography>{description}</Typography>
                                    {genres.length > 0 && (
                                        <GenreChips genres={genres} />
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    )
}
