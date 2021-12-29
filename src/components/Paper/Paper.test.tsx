import { render, screen } from '@testing-library/react'

import { Paper } from './Paper'
import { mockData } from './mockData'

describe('Paper', () => {
    test('renders component', () => {
        render(<Paper {...mockData} onClick={jest.fn} />)

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
