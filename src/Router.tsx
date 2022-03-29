import { Route, Routes } from 'react-router-dom'

import { Layout } from './components'
import {
    Detail,
    MovieNowPlaying,
    NotFound,
    MoviePopular,
    MovieTopRated,
    MovieUpcoming,
    Trending,
    TvOnTheAir,
    TvPopular,
    TvToday,
    TvTopRated,
} from './pages'
import { RouteRecord } from './types'

export const routes: Record<string, RouteRecord> = {
    movie: {
        popular: {
            path: 'popular',
            name: 'Popular',
        },
        nowPlaying: {
            path: 'now-playing',
            name: 'Now playing',
        },
        topRated: {
            path: 'top-rated',
            name: 'Top rated',
        },
        upcoming: {
            path: 'upcoming',
            name: 'Upcoming',
        },
    },
    tv: {
        popular: {
            path: 'popular',
            name: 'Popular',
        },
        today: {
            path: 'today',
            name: 'Airing Today',
        },
        onTheAir: {
            path: 'on_the_air',
            name: 'On the air',
        },
        topRated: {
            path: 'top_rated',
            name: 'Top rated',
        },
    },
}

export const Router = () => (
    <Routes>
        <Route path="" element={<Layout />}>
            <Route index element={<Trending />} />
            <Route path="movie">
                <Route
                    path={routes.movie.popular.path}
                    element={<MoviePopular />}
                />
                <Route
                    path={routes.movie.nowPlaying.path}
                    element={<MovieNowPlaying />}
                />
                <Route
                    path={routes.movie.topRated.path}
                    element={<MovieTopRated />}
                />
                <Route
                    path={routes.movie.upcoming.path}
                    element={<MovieUpcoming />}
                />
                <Route path="detail/:id" element={<Detail />} />
            </Route>
            <Route path="tv">
                <Route path={routes.tv.popular.path} element={<TvPopular />} />
                <Route path={routes.tv.today.path} element={<TvToday />} />
                <Route
                    path={routes.tv.onTheAir.path}
                    element={<TvOnTheAir />}
                />
                <Route
                    path={routes.tv.topRated.path}
                    element={<TvTopRated />}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)
