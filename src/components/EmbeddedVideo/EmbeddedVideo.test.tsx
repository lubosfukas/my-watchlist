import { render, screen } from '@testing-library/react'

import { EmbeddedVideo } from './EmbeddedVideo'

describe('EmbeddedVideo', () => {
    test('renders component', () => {
        render(
            <EmbeddedVideo
                title="Spider-Man: No Way Home"
                videoKey="JfVOs4VSpmA"
            />
        )

        expect(screen.getByTestId('embedded-video-frame')).toBeInTheDocument()
    })
})
