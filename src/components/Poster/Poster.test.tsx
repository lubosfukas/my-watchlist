import { render, screen } from '@testing-library/react'

import { Poster } from './Poster'

describe('Poster', () => {
    test('renders component', () => {
        render(
            <Poster
                path="1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                title="Spider-Man: No Way Home"
            />
        )

        expect(screen.getByRole('img', { name: 'Poster' })).toBeInTheDocument()
        expect(
            screen.getByAltText('Poster of Spider-Man: No Way Home')
        ).toBeInTheDocument()
    })
})
