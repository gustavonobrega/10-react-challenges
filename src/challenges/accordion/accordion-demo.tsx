import { useState } from 'react'
import styles from './style.module.css'

type AccordionDemoProps = {
  items: {
    id: number
    title: string
    description: string
  }[]
}

export default function AccordionDemo({ items }: AccordionDemoProps) {
  const [selecteds, setSelecteds] = useState<number[]>([])
  const [multiSelection, setMultiSelection] = useState(false)

  function handleSingleSelection(id: number) {
    setSelecteds(selecteds.includes(id) ? [] : [id])
  }

  function handleMultipleSelection(id: number) {
    if (selecteds.includes(id)) {
      setSelecteds(state => state.filter(item => item !== id))
    } else {
      setSelecteds(state => [...state, id])
    }
  }

  function handleEnableMultiSelection() {
    if (selecteds.length > 0) {
      setMultiSelection(!multiSelection)
      setSelecteds([])
    } else {
      setMultiSelection(!multiSelection)
    }
  }

  return (
    <div className={styles.accordion}>
      <button onClick={handleEnableMultiSelection} className={styles['accordion-button']}>Enable Multi Selection {multiSelection && '✔'}</button>

      <ul className={styles['accordion-list']}>
        {items.map((item) => {
          const isSelected = selecteds.includes(item.id)

          return (
            <li
              onClick={() => multiSelection ? handleMultipleSelection(item.id) : handleSingleSelection(item.id)}
              className={styles['accordion-item']}
              key={item.id}
              data-isopen={isSelected}
            >
              <div className={styles['accordion-title']}>
                <strong>{item.title}</strong>
                <span>{isSelected ? '-' : '+'}</span>
              </div>

              {isSelected && <p>{item.description}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
