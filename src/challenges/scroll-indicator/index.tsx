import { useEffect, useState } from 'react'
import styles from './style.module.css'

type Data = {
  id: number
  title: string
}

export function ScrollIndicator() {
  const [data, setData] = useState<Data[] | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        const response = await fetch('https://dummyjson.com/products?limit=50')

        if (!response.ok) {
          throw new Error('Network response error...')
        }

        const res = await response.json()
        setData(res.products.map(product => ({id: product.id, title: product.title})))
        setIsLoading(false)

      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }

    getData()
  }, [])


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Custom Scroll Indicator</h1>
      </header>

      <main  className={styles.content}>
        {isLoading && <h2>Loading...</h2>}

        {data?.map(item => <p key={item.id} >{item.title}</p>) }     
      </main>
    </div>
  )
}
