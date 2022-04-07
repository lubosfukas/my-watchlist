import { render, screen } from '@testing-library/react'

import { Paper } from './Paper'
import { movies } from '../../shared/mockedData'

const movie = movies[0]

describe('Paper', () => {
    test('renders component', () => {
        render(
            <Paper
                averageVote={movie['vote_average']}
                posterPath={movie['poster_path']}
                releaseDate={movie['release_date']}
                title={movie.title}
                onClick={jest.fn}
            />
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
