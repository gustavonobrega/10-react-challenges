import { useState } from "react"

export function useLocalStorage<T>(key: string, initialValue?: T):  { value: T, updateLocalStorage: (newValue: T) => void } {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (!storageValue) {
      return initialValue 
    }

    return JSON.parse(storageValue)
  })

  function updateLocalStorage(newValue: T) {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return { value, updateLocalStorage }
}
