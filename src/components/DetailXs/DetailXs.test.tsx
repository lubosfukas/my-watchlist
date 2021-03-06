import { render, screen } from '@testing-library/react'

import { DetailXs } from '../DetailXs'
import { movieDetail } from '../../shared/mockedData'

describe('DetailXs', () => {
    test('renders component', () => {
        render(<DetailXs {...movieDetail} />)

        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: No Way Home',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByText('The Multiverse unleashed.')
        ).toBeInTheDocument()
        expect(
            screen.getByRole('img', { name: 'Backdrop' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Watch trailer' })
        ).toBeInTheDocument()
        expect(
            screen.getByText(
                'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'
            )
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Release date' })
        ).toBeInTheDocument()
        expect(screen.getByText('December 15, 2021')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Runtime' })
        ).toBeInTheDocument()
        expect(screen.getByText('2 h 28 m')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Budget' })
        ).toBeInTheDocument()
        expect(screen.getByText('200,000,000 $')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Revenue' })
        ).toBeInTheDocument()
        expect(screen.getByText('638,000,000 $')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Voting' })
        ).toBeInTheDocument()
        expect(screen.getByText('86 %')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Genres' })
        ).toBeInTheDocument()
        expect(screen.getByText('Action')).toBeInTheDocument()
        expect(screen.getByText('Adventure')).toBeInTheDocument()
        expect(screen.getByText('Science Fiction')).toBeInTheDocument()
    })
})
