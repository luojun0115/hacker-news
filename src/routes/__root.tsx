import { createRootRoute } from '@tanstack/react-router'
import React from 'react'
import '../styles/globals.css'

export const Route = createRootRoute({
  component: () => {
    return (
      <html lang="zh-CN">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>Hacker News Daily</title>
        </head>
        <body className="bg-white">
          <main className="container mx-auto px-4 py-8 max-w-3xl">
            <Outlet />
          </main>
        </body>
      </html>
    )
  },
})

function Outlet() {
  return <Route.Outlet />
}
