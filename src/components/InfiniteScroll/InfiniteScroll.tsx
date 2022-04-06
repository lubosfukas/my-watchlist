import styled from '@emotion/styled'
import InfiniteScrollComponent from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import { Paper, PaperSkeleton } from '../Paper'
import { MediaDTO, MovieDTO, TvDTO } from '../../types'
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
    media: Array<MediaDTO>
    moreMedia: boolean
    fetchNextPage: () => void
}

const isMovie = (movie: MovieDTO | TvDTO): movie is MovieDTO => {
    return (movie as MovieDTO).title !== undefined
}

export const InfiniteScroll = ({ media, moreMedia, fetchNextPage }: Props) => {
    let navigate = useNavigate()

    return (
        <StyledInfiniteScroll
            dataLength={media.length}
            next={fetchNextPage}
            hasMore={moreMedia}
            loader={<PaperSkeleton />}
        >
            {media.map((x: MediaDTO) => {
                if (isMovie(x))
                    return (
                        <Paper
                            key={x.id}
                            averageVote={x['vote_average']}
                            posterPath={x['poster_path']}
                            releaseDate={x['release_date']}
                            title={x.title}
                            onClick={() => navigate(`/movie/detail/${x.id}`)}
                        />
                    )
                else
                    return (
                        <Paper
                            key={x.id}
                            averageVote={x['vote_average']}
                            posterPath={x['poster_path']}
                            releaseDate={x['first_air_date']}
                            title={x.name}
                            onClick={() => navigate(`/tv/detail/${x.id}`)}
                        />
                    )
            })}
        </StyledInfiniteScroll>
    )
}
