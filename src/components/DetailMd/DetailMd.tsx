/** @jsxImportSource @emotion/react */
import { Box, Grid, Container, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

import { EmbeddedVideo } from '../EmbeddedVideo'
import { DetailItem } from '../DetailItem'
import { GenreChips } from '../GenreChips'
import { List, Props as ListProps } from '../List'
import { Poster } from '../Poster'
import { Video } from '../../types'

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
    return (
        <Grid container>
            <Grid
                css={css`
                    background-image: url(${backdropImageUrl});
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
                                <Poster path={posterPath} title={title} />
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
            <Grid item md={12}>
                <Container>
                    {trailer && (
                        <DetailItem
                            label="Trailer"
                            component={
                                <div
                                    css={css`
                                        height: 360px;
                                        width: 640px;
                                    `}
                                >
                                    <EmbeddedVideo
                                        title={title}
                                        videoKey={trailer.key}
                                    />
                                </div>
                            }
                        />
                    )}
                </Container>
            </Grid>
        </Grid>
    )
}
