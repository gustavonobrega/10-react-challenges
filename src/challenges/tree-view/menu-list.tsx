import { MenuItem, type Item } from "./menu-item"
import styles from './style.module.css'

interface MenuListPros {
  data: Item[]
}

export default function MenuList({data} : MenuListPros) {
  return (
    <ul className={styles.content}>
        {data.length ? data.map(item => <MenuItem key={item.label} data={item} />) : null}
    </ul>
  )
}
