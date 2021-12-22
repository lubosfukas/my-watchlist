import { render, screen } from '@testing-library/react'

import { MovieCard } from './MovieCard'
import { mockData } from './mockData'

describe('MovieCard', () => {
    test('renders component', () => {
        render(<MovieCard {...mockData} onClick={jest.fn} />)

        expect(screen.getByRole('img', { name: 'Poster' })).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: '8.6/10' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: No Way Home (2021)',
            })
        ).toBeInTheDocument()
    })
})
