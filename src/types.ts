import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

export type MovieDTO = {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type PagedResponseDTO = {
    page: number
    results: Array<MovieDTO>
    total_pages: number
    total_results: number
}

export type FetchNextPage = (
    options?: FetchNextPageOptions
) => Promise<InfiniteQueryObserverResult<PagedResponseDTO, string>>
