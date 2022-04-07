import { Chip, Stack } from '@mui/material'

import { DetailItem } from '../DetailItem'
import { Genres } from '../../types'

export const GenreChips: React.FC<{ genres: Genres }> = ({ genres }) => (
    <DetailItem
        label="Genres"
        component={
            <Stack direction="row" flexWrap="wrap">
                {genres.map(({ name }) => (
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
)
