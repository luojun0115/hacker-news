import { Route as rootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as PostDateRoute } from './routes/post/$date'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute
      element: typeof IndexRoute.component
    }
    '/post/$date': {
      parentRoute: typeof rootRoute
      element: typeof PostDateRoute.component
    }
  }
}

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  PostDateRoute,
])
