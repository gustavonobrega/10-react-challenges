import { useState } from 'react'
import styles from './style.module.css'

type StarRatingProps = {
  numOfStars?: number
}

export function StarRating({ numOfStars = 5 }: StarRatingProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleRating(index: number) {
    setRating(index)
  }

  function handleMouseHover(index: number) {
    setHover(index)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className={styles.container}>
      {Array.from({ length: numOfStars }).map((_, i) =>
        <div
          key={i}
          className={`${styles.star} ${i + 1 <= (hover || rating) ? styles.active : ''}`}
          onClick={() => handleRating(i + 1)}
          onMouseEnter={() => handleMouseHover(i + 1)}
          onMouseLeave={handleMouseLeave}
        >
        </div>
      )}
    </div>
  )
}
