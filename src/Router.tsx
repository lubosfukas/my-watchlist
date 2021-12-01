import { Navigate, Route, Routes } from 'react-router-dom'

import { Popular, Trending, TopRated, Upcoming } from './pages'

export const routes = [
    {
        path: '',
        component: <Navigate to="popular" />,
        name: 'Homepage',
        isVisible: false,
    },
    {
        path: 'popular',
        component: <Popular />,
        name: 'Popular',
        isVisible: true,
    },
    {
        path: 'trending',
        component: <Trending />,
        name: 'Trending',
        isVisible: true,
    },
    {
        path: 'top-rated',
        component: <TopRated />,
        name: 'Top rated',
        isVisible: true,
    },
    {
        path: 'upcoming',
        component: <Upcoming />,
        name: 'Upcoming',
        isVisible: true,
    },
]

export const Router = () => {
    const routeComponents = routes.map(({ path, component }, key) => (
        <Route path={path} element={component} key={key} />
    ))

    return <Routes>{routeComponents}</Routes>
}
