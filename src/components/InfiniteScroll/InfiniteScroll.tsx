import styled from '@emotion/styled'
import InfiniteScrollComponent from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import { Paper, PaperSkeleton } from '../Paper'
import { MovieDTO } from '../../types'
import { routes } from '../../Router'
import { device } from '../../utils/device'

const StyledInfiniteScroll = styled(InfiniteScrollComponent)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.md} {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
    }
`

type Props = {
    movies: Array<MovieDTO>
    moreMovies: boolean
    fetchNextPage: () => void
}

export const InfiniteScroll = ({
    movies,
    moreMovies,
    fetchNextPage,
}: Props) => {
    let navigate = useNavigate()

    return (
        <StyledInfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={moreMovies}
            loader={<PaperSkeleton />}
        >
            {movies.map((movie: MovieDTO) => (
                <Paper
                    key={movie.id}
                    {...movie}
                    onClick={() =>
                        navigate(
                            `/${routes.detail.path.replace(
                                ':id',
                                movie.id.toString()
                            )}`
                        )
                    }
                />
            ))}
        </StyledInfiniteScroll>
    )
}
