import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { mockData } from './mockData'
import { MovieScroll } from './MovieScroll'

describe('MovieScroll', () => {
    test('renders component', () => {
        render(
            <MemoryRouter initialEntries={['popular']}>
                <MovieScroll
                    movies={mockData.movies}
                    moreMovies={false}
                    fetchNextPage={jest.fn}
                />
            </MemoryRouter>
        )

        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: No Way Home (2021)',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Venom: Let There Be Carnage (2021)',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Red Notice (2021)',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Shang-Chi and the Legend of the Ten Rings (2021)',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: Homecoming (2017)',
            })
        ).toBeInTheDocument()
    })
})
