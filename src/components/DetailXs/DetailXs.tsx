import { Divider, Stack, Typography, useMediaQuery } from '@mui/material'

import { BackdropImage } from '../BackdropImage'
import { device } from '../../utils/device'
import { EmbeddedVideo } from '../EmbeddedVideo'
import { GenreChips } from '../GenreChips'
import { List, Props as ListProps } from '../List'
import { Video } from '../../types'
import { DetailItem } from '../DetailItem'

type Props = {
    backdropImageUrl: string
    description: string
    genres: Array<string>
    title: string
    directing?: string
    tagline?: string
    trailer?: Video
    writing?: string
} & Pick<ListProps, 'listItems'>

export const DetailXs = ({
    backdropImageUrl,
    description,
    directing,
    genres,
    listItems,
    tagline,
    title,
    trailer,
    writing,
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
            {genres.length > 0 && <GenreChips genres={genres} />}
            {tagline && (
                <Typography sx={{ fontStyle: 'italic', mb: 1 }} variant="body1">
                    {tagline}
                </Typography>
            )}
            <Typography sx={{ mb: 1 }} variant="body1">
                {description}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <DetailItem label="Directing" value={directing} />
            <DetailItem label="Writing" value={writing} />
        </Stack>
    )
}
