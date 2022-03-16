import { render, screen } from '@testing-library/react'

import { Paper } from './Paper'
import { movies } from '../../shared/mockedData'

describe('Paper', () => {
    test('renders component', () => {
        render(<Paper {...movies[0]} onClick={jest.fn} />)

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
