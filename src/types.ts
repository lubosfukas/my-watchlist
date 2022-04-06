import {
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
    UseInfiniteQueryResult,
} from 'react-query'

export type MovieDTO = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
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

export type TvDTO = {
    backdrop_path: string
    first_air_date: string
    genre_ids: Array<number>
    id: number
    name: string
    origin_country: Array<string>
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type MediaDTO = MovieDTO | TvDTO

export type PagedResponseDTO = {
    page: number
    results: Array<MediaDTO>
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
    site: 'YouTube'
    size: number
    type: 'Trailer' | 'Teaser' | 'Featurette' | 'Clip'
}>

export interface MovieDetailDTO extends Omit<MovieDTO, 'genre_ids'> {
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

export type CreatedBy = {
    id: number
    credit_id: number
    name: string
    gender: number
    profile_path: string | null
}

export type Season = {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
}

export type TvDetailDTO = {
    backdrop_path: string | null
    createdBy: CreatedBy
    episode_run_time: Array<number>
    first_air_date: string
    genres: Genres
    homepage: string
    id: number
    in_production: boolean
    languages: Array<string>
    last_air_date: string
    last_episode_to_air: {
        air_date: string
        episode_number: number
        id: number
        name: string
        overview: string
        production_code: string
        season_number: number
        still_path: string | null
        vote_average: number
        vote_count: number
    }
    name: string
    next_episode_to_air: null
    networks: ProductionCompanies
    number_of_episodes: number
    number_of_seasons: number
    origin_country: Array<string>
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string | null
    production_companies: ProductionCompanies
    production_countries: ProductionCountries
    seasons: Array<Season>
    spoken_languages: SpokenLanguages
    status: string
    tagline: string
    type: string
    videos: { results: Videos }
    vote_average: number
    vote_count: number
}

export type Route = {
    path: string
    name: string
}

export type RouteRecord = Record<string, Route>
