import { useEffect } from 'react'

import { getRoute } from '../utils/helpers'

export const useSetPageTitle = (pathname: string) => {
    useEffect(() => {
        const title = getRoute(pathname)?.name

        if (title) document.title = title
    }, [pathname])
}
