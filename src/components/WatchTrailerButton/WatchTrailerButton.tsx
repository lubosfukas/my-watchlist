import { Button } from '@mui/material'

import { YOUTUBE_WATCH_URL } from '../../utils/constants'

export const WatchTrailerButton: React.FC<{ trailerKey: string }> = ({
    trailerKey,
}) => (
    <Button
        color="secondary"
        onClick={() =>
            window.location.assign(`${YOUTUBE_WATCH_URL}?v=${trailerKey}`)
        }
        sx={{ my: 1 }}
        variant="contained"
    >
        Watch trailer
    </Button>
)
