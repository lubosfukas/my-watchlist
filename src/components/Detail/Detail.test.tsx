import { render, screen } from '@testing-library/react'
import { Videos } from '../../types'
import {
    getAverageVote,
    getGenres,
    getPrice,
    getReleaseDate,
    getRuntime,
    getTrailer,
} from './helpers'
import { mockData } from './mockData'

import { Detail } from './Detail'

describe('Detail', () => {
    test('renders component', () => {
        render(<Detail {...mockData} />)

        expect(screen.getByRole('img', { name: 'Poster' })).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: 'Spider-Man: No Way Home',
            })
        ).toBeInTheDocument()
        expect(
            screen.getByText('The Multiverse unleashed.')
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
        expect(
            screen.getByRole('heading', { name: 'Trailer' })
        ).toBeInTheDocument()
        expect(screen.getByTestId('embedded-video-frame'))
    })
})

describe('helpers', () => {
    describe('getReleaseDate', () => {
        test('returns formatted date', () => {
            expect(getReleaseDate('2021-12-15')).toEqual('December 15, 2021')
        })

        test('returns undefined', () => {
            expect(getReleaseDate('')).toBeUndefined()
        })
    })

    describe('getRuntime', () => {
        test('returns formatted runtime', () => {
            expect(getRuntime(148)).toEqual('2 h 28 m')
        })

        test('returns undefined', () => {
            expect(getRuntime(0)).toBeUndefined()
        })
    })

    describe('getPrice', () => {
        test('returns formatted price', () => {
            expect(getPrice(148000000)).toEqual('148,000,000 $')
        })

        test('returns undefined', () => {
            expect(getPrice(0)).toBeUndefined()
        })
    })

    describe('getAverageVote', () => {
        test('returns percentage', () => {
            expect(getAverageVote(8.64)).toEqual('86.4 %')
        })

        test('returns undefined', () => {
            expect(getAverageVote(0)).toBeUndefined()
        })
    })

    describe('getGenres', () => {
        test('returns array of names', () => {
            expect(getGenres(mockData.genres)).toStrictEqual([
                'Action',
                'Adventure',
                'Science Fiction',
            ])
        })

        test('returns undefined', () => {
            expect(getGenres([])).toBeUndefined()
        })
    })

    describe('getTrailer', () => {
        test('returns official trailer', () => {
            expect(getTrailer(mockData.videos.results)).toStrictEqual({
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
            })
        })

        test('returns trailer', () => {
            const value: Videos = [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'Official Teaser Trailer',
                    key: 'WgU7P6o-GkM',
                    site: 'YouTube',
                    size: 1080,
                    type: 'Trailer',
                    official: true,
                    published_at: '2021-08-24 01:40:05 UTC',
                    id: '6124694a534661005cd0b8a7',
                },
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'The New Spider-Man Title is…',
                    key: 'iqyPvdsOWKk',
                    site: 'YouTube',
                    size: 1080,
                    type: 'Teaser',
                    official: true,
                    published_at: '2021-02-24 17:44:20 UTC',
                    id: '60378fdcd132d60040a45d96',
                },
            ]

            const expectedValue = {
                iso_639_1: 'en',
                iso_3166_1: 'US',
                name: 'Official Teaser Trailer',
                key: 'WgU7P6o-GkM',
                site: 'YouTube',
                size: 1080,
                type: 'Trailer',
                official: true,
                published_at: '2021-08-24 01:40:05 UTC',
                id: '6124694a534661005cd0b8a7',
            }

            expect(getTrailer(value)).toStrictEqual(expectedValue)
        })

        test('returns undefined', () => {
            const value: Videos = [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'The New Spider-Man Title is…',
                    key: 'iqyPvdsOWKk',
                    site: 'YouTube',
                    size: 1080,
                    type: 'Teaser',
                    official: true,
                    published_at: '2021-02-24 17:44:20 UTC',
                    id: '60378fdcd132d60040a45d96',
                },
            ]

            expect(getTrailer(value)).toBeUndefined()
        })

        test('returns undefined', () => {
            expect(getTrailer([])).toBeUndefined()
        })
    })
})
