import { Route, Routes } from 'react-router-dom'

import { Layout } from './components'

import {
    Detail,
    NowPlaying,
    NotFound,
    Popular,
    TopRated,
    Upcoming,
} from './pages'

export const routes: Record<
    string,
    {
        path: string
        name: string
        excludeFromNav: boolean
    }
> = {
    home: {
        path: '',
        name: 'Home',
        excludeFromNav: false,
    },
    nowPlaying: {
        path: 'now-playing',
        name: 'Now playing',
        excludeFromNav: false,
    },
    topRated: {
        path: 'top-rated',
        name: 'Top rated',
        excludeFromNav: false,
    },
    upcoming: {
        path: 'upcoming',
        name: 'Upcoming',
        excludeFromNav: false,
    },
    detail: {
        path: 'detail/:id',
        name: 'Detail',
        excludeFromNav: true,
    },
    notFound: {
        path: '*',
        name: 'Not found',
        excludeFromNav: true,
    },
}

export const Router = () => (
    <Routes>
        <Route path={routes.home.path} element={<Layout />}>
            <Route index element={<Popular />} />
            <Route path={routes.nowPlaying.path} element={<NowPlaying />} />
            <Route path={routes.topRated.path} element={<TopRated />} />
            <Route path={routes.upcoming.path} element={<Upcoming />} />
            <Route path={routes.detail.path} element={<Detail />} />
            <Route path={routes.notFound.path} element={<NotFound />} />
        </Route>
    </Routes>
)
