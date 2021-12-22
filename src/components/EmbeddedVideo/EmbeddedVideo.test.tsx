import { render } from '@testing-library/react'

import { EmbeddedVideo } from './EmbeddedVideo'

describe('EmbeddedVideo', () => {
    test('renders component', () => {
        const { getByTestId } = render(<EmbeddedVideo videoKey="JfVOs4VSpmA" />)

        expect(getByTestId('embedded-video-frame')).toBeInTheDocument()
    })
})
