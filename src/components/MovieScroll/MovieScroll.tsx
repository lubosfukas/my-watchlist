import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

import { MovieCard } from '..'
import { MovieDTO } from '../../types'
import { routerMap } from '../../Router'

const StyledInfiniteScroll = styled(InfiniteScroll)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

type Props = {
    movies: Array<MovieDTO>
    moreMovies: boolean
    fetchNextPage: () => void
}

export const MovieScroll = ({ movies, moreMovies, fetchNextPage }: Props) => {
    let navigate = useNavigate()

    return (
        <StyledInfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={moreMovies}
            loader={<CircularProgress />}
        >
            {movies &&
                movies.map((movie: MovieDTO) => (
                    <MovieCard
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
