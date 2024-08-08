import { useLocalStorage } from './useLocalStorage'
import styles from './style.module.css'

export function ThemeSwitch() {
  const { value, updateLocalStorage } = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    updateLocalStorage(value === "dark" || !value ? "light" : "dark")
  }

  return (
    <div className={`${styles.container} ${value === "dark" || !value ? "" : styles.light}`}>
      <div className={styles.content}>
        <h1>Hello World!</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
