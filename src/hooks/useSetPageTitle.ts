import { useEffect } from 'react'

import { routes } from '../Router'

export const useSetPageTitle = (pathname: string) => {
    useEffect(() => {
        const title = routes.find((x) => pathname === `/${x.path}`)?.name

        if (title) document.title = title
    }, [pathname])
}
