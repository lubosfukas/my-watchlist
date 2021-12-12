import { Navigate, Route, Routes } from 'react-router-dom'

import { NowPlaying, Popular, TopRated, Upcoming } from './pages'

export const routes = [
    {
        path: '',
        component: <Navigate to="popular" />,
        name: 'Homepage',
        excludeFromNav: true,
    },
    {
        path: 'popular',
        component: <Popular />,
        name: 'Popular',
        excludeFromNav: false,
    },
    {
        path: 'now-playing',
        component: <NowPlaying />,
        name: 'Now playing',
        excludeFromNav: false,
    },
    {
        path: 'top-rated',
        component: <TopRated />,
        name: 'Top rated',
        excludeFromNav: false,
    },
    {
        path: 'upcoming',
        component: <Upcoming />,
        name: 'Upcoming',
        excludeFromNav: false,
    },
]

export const Router = () => {
    const routeComponents = routes.map(({ path, component }, key) => (
        <Route path={path} element={component} key={key} />
    ))

    return <Routes>{routeComponents}</Routes>
}
