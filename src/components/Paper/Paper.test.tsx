import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import { Paper } from './Paper'
import { movies } from '../../shared/mockedData'

const movie = movies[0]

describe('Paper', () => {
    test('renders component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Paper
                    averageVote={movie['vote_average']}
                    posterPath={movie['poster_path']}
                    releaseDate={movie['release_date']}
                    title={movie.title}
                    to={`/movie/detail/${movie.id}`}
                />
            </MemoryRouter>
        )

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
