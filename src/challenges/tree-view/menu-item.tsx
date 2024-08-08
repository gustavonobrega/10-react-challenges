import { useState } from "react"
import MenuList from "./menu-list"
import styles from './style.module.css'

export interface Item {
  label: string
  to: string
  children?: Item[]
}

interface MenuItemProps {
  data: Item 
}


export function MenuItem({ data }: MenuItemProps) {
  const [toggleChildren, setToggleChildren] = useState(false)

  function handleToggleChildren() {
    setToggleChildren(prev => !prev)
  }

  return (
    <li className={styles.item}>
      {data.children ? (
        <button className={styles['item-button']} data-toggle={toggleChildren} onClick={handleToggleChildren}>{data.label}</button>
      ) : (
        <p>{data.label}</p>
      )}

      {data.children && toggleChildren ? (
        <>
          <MenuList data={data.children} />
        </>
      ) :
        null
      }
    </li>
  )
}
