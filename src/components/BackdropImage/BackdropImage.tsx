import { API_IMAGE_BASE_URL } from '../../utils/constants'

const DEFAULT_WIDTH = 300

export const BackdropImage = ({
    path,
    title,
}: {
    path: string
    title: string
}) => {
    const imagePath = `${API_IMAGE_BASE_URL}/w${DEFAULT_WIDTH}/${path}`

    return (
        <img
            alt={`Backdrop of ${title}`}
            aria-label="Backdrop"
            data-testid="backdrop-image"
            src={imagePath}
            style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
    )
}
