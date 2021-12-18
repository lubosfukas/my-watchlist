import { routerMap } from '../Router'

export const getRoute = (pathname: string) =>
    Object.values(routerMap).find(
        (x) => pathname.split('/')[1] === x.path.split('/')[0]
    )
