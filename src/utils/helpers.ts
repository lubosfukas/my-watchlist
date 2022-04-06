import { Genres, Videos } from '../types'

export const getReleaseDate = (releaseDate: string) => {
    if (!releaseDate) return

    return new Date(releaseDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const getRuntime = (runtime: number) => {
    if (runtime === 0) return

    const hours = (runtime / 60) ^ 0
    const minutes = runtime % 60

    if (hours === 0) return `${minutes} m`
    if (minutes === 0) return `${hours} h`
    return `${hours} h ${minutes} m`
}

export const getPrice = (price: number) => {
    if (price === 0) return
    return `${price.toLocaleString()} $`
}

export const getAverageVote = (averageVote: number) => {
    if (averageVote === 0) return
    return `${averageVote * 10} %`
}

export const getGenreNames = (genres: Genres) => {
    if (genres.length === 0) return
    return genres.map((g) => g.name)
}

export const getTrailer = (videos: Videos) => {
    if (videos.length === 0) return

    const officialTrailer = videos.find((v) => v.name === 'Official Trailer')
    if (!officialTrailer) {
        const trailer = videos.filter(
            (v) => v.official === true && v.type === 'Trailer'
        )[0]

        if (!trailer) return

        return trailer
    }

    return officialTrailer
}
