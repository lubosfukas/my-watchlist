import { useQuery } from 'react-query'

import { API_BASE_URL, API_KEY } from '../../../utils/constants'
import { TvDetailDTO } from '../../../types'

const fetchTvDetail = async (id?: string): Promise<TvDetailDTO> => {
    const response = await fetch(
        `${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos`
    )

    const movieResponse: TvDetailDTO = await response.json()
    return movieResponse
}

export const useFetchTvDetail = (id?: string) =>
    useQuery<TvDetailDTO, string>(
        [`fetchTvDetail`, id],
        () => fetchTvDetail(id),
        { enabled: !!id }
    )
