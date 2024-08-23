import { useEffect, useState } from "react"

export default function useFetch<T>(url: string): { data: T | null, loading: boolean, error: string | null } {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
  
        const response = await fetch(url)
        
        if(!response.ok) {
          throw new Error('Network response error...')
        }
        
        const data = await response.json()

        setData(data)
        setLoading(false)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong...')
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error } 
}
