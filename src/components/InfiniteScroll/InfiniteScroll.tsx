import { useNavigate } from 'react-router-dom'
import InfiniteScrollComponent from 'react-infinite-scroll-component'
import styled from '@emotion/styled'

import { Paper, Skeleton } from '..'
import { MovieDTO } from '../../types'
import { routerMap } from '../../Router'
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
            loader={<Skeleton />}
        >
            {movies.map((movie: MovieDTO) => (
                <Paper
                    key={movie.id}
                    {...movie}
                    onClick={() =>
                        navigate(
                            `/${routerMap['detail'].path.replace(
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
