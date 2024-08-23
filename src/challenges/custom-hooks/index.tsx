import { useRef, useState } from 'react'

import useFetch from './useFetch'
import useClickOutside from './useClickOutside'
import useWindowResize from './useWindowResize'

import styles from './style.module.css'

type Data = {
  products: {
    id: number
    title: string
  }[],
  loading: boolean,
  error: string | null
}

const url = 'https://dummyjson.com/products?limit=20'

export default function CustomHooks() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const { data, loading, error } = useFetch<Data>(url)
  const { width, height } = useWindowResize()
  useClickOutside(contentRef, handleClose)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles['fetch-hook']}>
        <h2>useFetch Hook</h2>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}

        {data && data.products.map(product => <p key={product.id}>{product.title}</p>)}
      </div>

      <div className={styles['click-outside']}  >
        {isOpen ? (
          <div ref={contentRef}>
            <h2>useOutsideClick Hook</h2>
            <p>Please click outside of this to close.</p>
          </div>
        ) : (
          <button type='button' onClick={handleOpen}>Show Content</button>
        )}
      </div>

      <div className={styles['window-resize']}>
        <h2>useWindowResize</h2>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
      </div>
    </div>
  )
}
