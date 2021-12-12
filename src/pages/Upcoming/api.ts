import { useInfiniteQuery } from 'react-query'

import { API_BASE_URL, API_KEY } from '../../utils/constants'
import { IInfiniteQueryResponse, PagedResponseDTO } from '../../types'

const fetchUpcomingMovies = async (page = 1): Promise<PagedResponseDTO> => {
    const response = await fetch(
        `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
    )

    const movieResponse: PagedResponseDTO = await response.json()
    return movieResponse
}

export const useFetchUpcomingMovies = (): IInfiniteQueryResponse => {
    const { data, ...rest } = useInfiniteQuery<PagedResponseDTO, string>(
        `fetchUpcomingMovies`,
        ({ pageParam }) => fetchUpcomingMovies(pageParam),
        {
            getNextPageParam: (last) => last.page + 1,
        }
    )

    const movieArrays = data ? data.pages.map((m) => m.results) : []
    const mergedMovies = movieArrays.reduce((prev, cur) => prev.concat(cur), [])

    const totalResults = data ? data.pages[0]['total_results'] : 0
    const totalPages = data ? data.pages[0]['total_pages'] : 0

    return {
        data: {
            results: mergedMovies,
            total_pages: totalPages,
            total_results: totalResults,
        },
        ...rest,
    }
}
