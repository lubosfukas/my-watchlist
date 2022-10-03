import { Chip, Stack, Typography, useMediaQuery } from '@mui/material'
import styled from '@emotion/styled'

import { BackdropImage } from '../BackdropImage'
import { EmbeddedVideo } from '../EmbeddedVideo'
import { device } from '../../utils/device'
import { Video } from '../../types'

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

    :not(:first-of-type) {
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

type Props = {
    backdropImageUrl: string
    description: string
    genres: Array<string>
    listItems: Array<string | undefined>
    title: string
    tagline?: string
    trailer?: Video
}

export const DetailXs = ({
    backdropImageUrl,
    description,
    genres,
    listItems,
    tagline,
    title,
    trailer,
}: Props) => {
    const isSm = useMediaQuery(device.sm)

    return (
        <Stack m={isSm ? 3 : 2}>
            <Typography sx={{ mb: 1 }} variant="h5">
                {title}
            </Typography>
            <List listItems={listItems} />
            {trailer ? (
                <EmbeddedVideo title={title} videoKey={trailer.key} />
            ) : (
                <BackdropImage path={backdropImageUrl} title={title} />
            )}
            {genres.length > 0 && (
                <Stack mb={0.5} mt={2} direction="row" flexWrap="wrap">
                    {genres.map((name) => (
                        <Chip
                            color="secondary"
                            key={name}
                            label={name}
                            sx={{ mb: 0.5, mr: 1 }}
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
                {description}
            </Typography>
        </Stack>
    )
}

const List = ({ listItems }: Pick<Props, 'listItems'>) => (
    <StyledList>
        {listItems
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
