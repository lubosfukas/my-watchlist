import { routerMap } from '../Router'

export const getRoute = (pathname: string) =>
    Object.values(routerMap).find((x) => pathname === `/${x.path}`)
