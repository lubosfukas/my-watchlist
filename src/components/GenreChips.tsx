import { Chip, Stack } from '@mui/material'

export const GenreChips = ({ genres }: { genres: Array<string> }) => (
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
)
