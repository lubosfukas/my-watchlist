import InfiniteScroll from 'react-infinite-scroll-component'
import { CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

import { MovieCard } from '..'
import { FetchNextPage, MovieDTO } from '../../types'

const StyledInfiniteScroll = styled(InfiniteScroll)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

type Props = {
    movies: Array<MovieDTO>
    moreMovies: boolean
    fetchNextPage: FetchNextPage
}

export const MovieScroll = ({ movies, moreMovies, fetchNextPage }: Props) => (
    <StyledInfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={moreMovies}
        loader={<CircularProgress />}
    >
        {movies &&
            movies.map((movie: MovieDTO) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
    </StyledInfiniteScroll>
)
