import { API_IMAGE_BASE_URL } from '../../utils/constants'

const DEFAULT_WIDTH = 300

export const Poster: React.FC<{ path: string; title: string }> = ({
    path,
    title,
}) => (
    <img
        alt={`Poster of ${title}`}
        aria-label="Poster"
        data-testid="poster-image"
        src={`${API_IMAGE_BASE_URL}/w${DEFAULT_WIDTH}/${path}`}
        style={{
            borderRadius: '16px',
            height: '100%',
            width: '100%',
        }}
    />
)
