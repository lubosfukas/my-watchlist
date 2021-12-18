import { useEffect } from 'react'

import { getRoute } from '../utils/helpers'

export const useSetPageTitle = (
    pathname: string,
    setToolbarTitle: (title: string) => void
) => {
    useEffect(() => {
        const title = getRoute(pathname)?.name

        if (title) {
            document.title = title
            setToolbarTitle(title)
        }
    }, [pathname, setToolbarTitle])
}
