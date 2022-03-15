import { Route, Routes } from 'react-router-dom'

import { Detail, NowPlaying, Popular, TopRated, Upcoming } from './pages'

export const routerMap: Record<
    string,
    {
        path: string
        component: JSX.Element
        name: string
        excludeFromNav: boolean
    }
> = {
    home: {
        path: '',
        component: <Popular />,
        name: 'Home',
        excludeFromNav: false,
    },
    'now-playing': {
        path: 'now-playing',
        component: <NowPlaying />,
        name: 'Now playing',
        excludeFromNav: false,
    },
    'top-rated': {
        path: 'top-rated',
        component: <TopRated />,
        name: 'Top rated',
        excludeFromNav: false,
    },
    upcoming: {
        path: 'upcoming',
        component: <Upcoming />,
        name: 'Upcoming',
        excludeFromNav: false,
    },
    detail: {
        path: 'detail/:id',
        component: <Detail />,
        name: 'Detail',
        excludeFromNav: true,
    },
}

const routes = Object.keys(routerMap).map((key) => {
    const { component, path } = routerMap[key as keyof typeof routerMap]
    return <Route key={key} element={component} path={path} />
})

export const Router = () => <Routes>{routes}</Routes>
