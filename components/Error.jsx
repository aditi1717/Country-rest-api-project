import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
    const error=useRouteError();
  return (
    <div>
      <h2>Something went wrong {error.status}</h2>
    </div>
  )
}
