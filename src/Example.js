import React from 'react'
import { useQuery } from '@tanstack/react-query'

export default function Example() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://localhost:4500').then(
            (res) => res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    
      return (
        <div>
          <h1>{data?.name}</h1>
          <h1>{data}</h1>
          <p>{data?.description}</p>
          <strong>👀 {data?.subscribers_count}</strong>{' '}
          <strong>✨ {data?.stargazers_count}</strong>{' '}
          <strong>🍴 {data?.forks_count}</strong>
        </div>
      )
}
