import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { movies } from '../../shared/mockedData'
import { InfiniteScroll } from './InfiniteScroll'

describe('InfiniteScroll', () => {
    test('renders component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <InfiniteScroll
                    media={movies}
                    moreMedia={false}
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
