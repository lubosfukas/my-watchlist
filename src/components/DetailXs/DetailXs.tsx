import { Chip, Stack, Typography, useMediaQuery } from '@mui/material'
import styled from '@emotion/styled'

import { BackdropImage } from '../BackdropImage'
import { EmbeddedVideo } from '../EmbeddedVideo'
import { MovieDetailDTO } from '../../types'
import { API_IMAGE_BASE_URL } from '../../utils/constants'
import {
    getAverageVote,
    getGenreNames,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from '../../utils/helpers'
import { device } from '../../utils/device'

const StyledList = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 0 8px 0;
    padding: 0;
`

const ListItem = styled.li`
    display: inline-block;
    color: inherit;
    vertical-align: middle;

    :not(:first-child) {
        ::before {
            display: inline-block;
            margin: 0 0.5rem 0.2rem 0.5rem;
            content: '';
            font-size: 1rem;
            line-height: 0.5rem;
            padding: 1px;
            border-radius: 50%;
            vertical-align: middle;
            background-color: black;
        }
    }
`

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
    const backdropImageUrl = `${API_IMAGE_BASE_URL}/original${otherProps.backdrop_path}`
    const genreNames = getGenreNames(genres)
    const trailer = getTrailer(videos.results)

    const isSm = useMediaQuery(device.sm)

    return (
        <Stack m={isSm ? 3 : 2}>
            <Typography sx={{ mb: 1 }} variant="h5">
                {title}
            </Typography>
            <List
                items={[
                    getReleaseDate(otherProps.release_date),
                    getRuntime(runtime),
                    getAverageVote(otherProps.vote_average),
                ]}
            />
            {trailer ? (
                <EmbeddedVideo title={title} videoKey={trailer.key} />
            ) : (
                <BackdropImage path={backdropImageUrl} title={title} />
            )}
            {genreNames && (
                <Stack mb={1} mt={2} direction="row" flexWrap="wrap">
                    {genreNames.map((name) => (
                        <Chip
                            color="secondary"
                            key={name}
                            label={name}
                            sx={{ mr: 1 }}
                        />
                    ))}
                </Stack>
            )}
            {tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {tagline}
                </Typography>
            )}
            <Typography sx={{ mb: 1 }} variant="body1">
                {overview}
            </Typography>
        </Stack>
    )
}

const List = ({ items }: { items: Array<string | undefined> }) => (
    <StyledList>
        {items
            .filter((item) => item !== undefined)
            .map((item) => (
                <ListItem key={item}>
                    <Typography sx={{ display: 'inline' }} variant="body2">
                        {item}
                    </Typography>
                </ListItem>
            ))}
    </StyledList>
)
