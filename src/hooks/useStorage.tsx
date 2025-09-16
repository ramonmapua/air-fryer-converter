import { useState, useEffect } from "react"

function useStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const localValue = localStorage.getItem(key)
      if (localValue == null) return initialValue
      return JSON.parse(localValue) as T
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // do nothing if storage fails
    }
  }, [key, value])
  return [value, setValue] as const
}

export default useStorage