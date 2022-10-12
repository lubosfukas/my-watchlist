import { render, screen } from '@testing-library/react'

import { DetailMd } from './DetailMd'

describe('DetailMd', () => {
    test('renders component', () => {
        render(
            <DetailMd
                backdropImageUrl="http://image.tmdb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
                description="Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
                genres={['Action', 'Adventure', 'Science Fiction']}
                listItems={['2022', '2h 28m', '86%']}
                posterPath="'/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'"
                tagline="The Multiverse unleashed."
                title="Spider-Man: No Way Home"
                trailer={{
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'Official Trailer',
                    key: 'JfVOs4VSpmA',
                    site: 'YouTube',
                    size: 1080,
                    type: 'Trailer',
                    official: true,
                    published_at: '2021-11-17 01:30:05 UTC',
                    id: '61945b8a4da3d4002992d5a6',
                }}
            />
        )

        expect(screen.getByRole('img', { name: 'Poster' })).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: No Way Home',
            })
        ).toBeInTheDocument()
        expect(screen.getByText('2022')).toBeInTheDocument()
        expect(screen.getByText('2h 28m')).toBeInTheDocument()
        expect(screen.getByText('86%')).toBeInTheDocument()
        expect(
            screen.getByText('The Multiverse unleashed.')
        ).toBeInTheDocument()
        expect(
            screen.getByText(
                'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'
            )
        ).toBeInTheDocument()
        expect(screen.getByText('Action')).toBeInTheDocument()
        expect(screen.getByText('Adventure')).toBeInTheDocument()
        expect(screen.getByText('Science Fiction')).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: 'Trailer' })
        ).toBeInTheDocument()
        expect(screen.getByTestId('embedded-video-frame')).toBeInTheDocument()
    })
})
