import { API_IMAGE_BASE_URL } from '../../utils/constants'

const DEFAULT_WIDTH = 300

export const BackdropImage: React.FC<{
    path: string
    title: string
}> = ({ path, title }) => (
    <img
        alt={`Backdrop of ${title}`}
        aria-label="Backdrop"
        data-testid="backdrop-image"
        src={`${API_IMAGE_BASE_URL}/w${DEFAULT_WIDTH}/${path}`}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
)
