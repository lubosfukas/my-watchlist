import { Route, Routes } from 'react-router-dom'
import {
    BarChart,
    LiveTv,
    LocalFireDepartment,
    Today,
    Upcoming,
} from '@mui/icons-material'

import { Layout } from './components'
import {
    MovieDetail,
    MovieNowPlaying,
    MoviePopular,
    MovieTopRated,
    MovieUpcoming,
    NotFound,
    Trending,
    TvDetail,
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
            icon: <LocalFireDepartment />,
        },
        nowPlaying: {
            path: 'now-playing',
            name: 'Now playing',
            icon: <LiveTv />,
        },
        topRated: {
            path: 'top-rated',
            name: 'Top rated',
            icon: <BarChart />,
        },
        upcoming: {
            path: 'upcoming',
            name: 'Upcoming',
            icon: <Upcoming />,
        },
    },
    tv: {
        popular: {
            path: 'popular',
            name: 'Popular',
            icon: <LocalFireDepartment />,
        },
        today: {
            path: 'today',
            name: 'Airing today',
            icon: <Today />,
        },
        onTheAir: {
            path: 'on_the_air',
            name: 'On the air',
            icon: <LiveTv />,
        },
        topRated: {
            path: 'top_rated',
            name: 'Top rated',
            icon: <BarChart />,
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
                <Route path="detail/:id" element={<MovieDetail />} />
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
                <Route path="detail/:id" element={<TvDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
)
