import { useRouteError } from '@tanstack/react-router'
import React from 'react'

export function DefaultCatchBoundary() {
  const error = useRouteError()
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
      <h1 className="text-xl font-bold text-red-800">Error</h1>
      <p className="text-red-700">{error.message}</p>
      <p className="text-sm text-red-500 mt-2">
        {error.stack?.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </p>
    </div>
  )
}
