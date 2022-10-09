import { Chip, Stack } from '@mui/material'

export const GenreChips = ({ genres }: { genres: Array<string> }) => (
    <Stack mb={0.5} direction="row" flexWrap="wrap">
        {genres.map((name) => (
            <Chip
                color="secondary"
                key={name}
                label={name}
                sx={{
                    mb: 0.5,
                    mr: 1,
                }}
            />
        ))}
    </Stack>
)
