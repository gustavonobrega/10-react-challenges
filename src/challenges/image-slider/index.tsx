import { useEffect, useState } from 'react'
import styles from './style.module.css'

export function ImageSlider() {
  const [images, setImages] = useState<string[] | null>(null)
  const [selected, setSelected] = useState<number>(0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true)
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')

        if (!response.ok) {
          throw new Error('Network response error...')
        }

        const data = await response.json()
        const urls = data.map(item => item.download_url)

        setImages(urls)
        setIsLoading(false)


      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong...')
        setIsLoading(false)
      }
    }

    getImages()
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Carregando... </h1>
      </div>
    )
  }

  if (!images || error) {
    return (
      <div>
        <h1>Falho ao obter dados.</h1>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles['img-wrapper']}>
          {images.map((image, i) => <img key={image} src={image} className={`${i === selected ? styles['img-selected'] : ""}`} alt="" />)}
        </div>

        <div className={styles.buttons}>
          <button type='button' disabled={selected <= 0} onClick={() => setSelected(prev => prev - 1)}>&larr;</button>
          <button type='button' disabled={selected >= images.length - 1} onClick={() => setSelected(prev => prev + 1)}>&rarr;</button>
        </div>

        <ul className={styles['img-menu']}>
          {images.map((image, i) => <li key={image} onClick={() => setSelected(i)} className={`${styles['img-bt']} ${i === selected ? styles.selected : ""}`}></li>)}
        </ul>

      </div>
    </div>
  )
}
