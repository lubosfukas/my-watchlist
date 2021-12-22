import { useQuery } from 'react-query'

import { API_BASE_URL, API_KEY } from '../../utils/constants'
import { MovieDetailDTO } from '../../types'

const fetchMovieDetail = async (id: string): Promise<MovieDetailDTO> => {
    const response = await fetch(
        `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    )

    const movieResponse: MovieDetailDTO = await response.json()
    return movieResponse
}

export const useFetchMovieDetail = (id: string) =>
    useQuery<MovieDetailDTO, string>([`fetchMovieDetail`, id], () =>
        fetchMovieDetail(id)
    )
