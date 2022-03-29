import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query'

import { API_BASE_URL, API_KEY } from '../../utils/constants'
import { PagedResponseDTO } from '../../types'

interface InfiniteQueryResponse
    extends Omit<UseInfiniteQueryResult<PagedResponseDTO, string>, 'data'> {
    data: Omit<PagedResponseDTO, 'page'>
}

const fetchMedia = async (url: string, page = 1): Promise<PagedResponseDTO> => {
    const response = await fetch(
        `${API_BASE_URL}/${url}?api_key=${API_KEY}&page=${page}`
    )

    const movieResponse: PagedResponseDTO = await response.json()
    return movieResponse
}

export const useFetchMedia = (url: string): InfiniteQueryResponse => {
    const { data, ...rest } = useInfiniteQuery<PagedResponseDTO, string>(
        ['fetchMedia', url],
        ({ pageParam }) => fetchMedia(url, pageParam),
        {
            getNextPageParam: (last) => last.page + 1,
        }
    )

    const dataArrays = data ? data.pages.map((m) => m.results) : []
    const mergedData = dataArrays.reduce((prev, cur) => prev.concat(cur), [])

    const totalResults = data ? data.pages[0]['total_results'] : 0
    const totalPages = data ? data.pages[0]['total_pages'] : 0

    return {
        data: {
            results: mergedData,
            total_pages: totalPages,
            total_results: totalResults,
        },
        ...rest,
    }
}
