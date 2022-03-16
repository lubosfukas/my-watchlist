import { render, screen } from '@testing-library/react'

import { BackdropImage } from './BackdropImage'

describe('BackdropImage', () => {
    test('renders component', () => {
        render(
            <BackdropImage
                path="5P8SmMzSNYikXpxil6BYzJ16611.jpg"
                title="The Batman"
            />
        )

        expect(
            screen.getByRole('img', { name: 'Backdrop' })
        ).toBeInTheDocument()
        expect(
            screen.getByAltText('Backdrop of The Batman')
        ).toBeInTheDocument()
    })
})
