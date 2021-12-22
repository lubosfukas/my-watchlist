import {
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
    UseInfiniteQueryResult,
} from 'react-query'

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

export interface IInfiniteQueryResponse
    extends Omit<UseInfiniteQueryResult<PagedResponseDTO, string>, 'data'> {
    data: Omit<PagedResponseDTO, 'page'>
}

export type BelongsToCollection = {
    backdrop_path: string
    id: number
    name: string
    poster_path: string
} | null

export type Genres = Array<{ id: number; name: string }>

export type ProductionCompanies = Array<{
    id: number
    logo_path: string | null
    name: string
    origin_country: string
}>

export type ProductionCountries = Array<{
    iso_3166_1: string
    name: string
}>

export type SpokenLanguages = Array<{
    english_name: string
    iso_639_1: string
    name: string
}>

export type Videos = Array<{
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: 'Youtube'
    size: number
    type: 'Trailer' | 'Teaser' | 'Featurette'
}>

export interface MovieDetailDTO extends MovieDTO {
    belongs_to_collection: BelongsToCollection
    budget: number
    genres: Genres
    homepage: string
    imdb_id: string
    production_companies: ProductionCompanies
    production_countries: ProductionCountries
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguages
    status: string
    tagline: string
    videos: { results: Videos }
}
