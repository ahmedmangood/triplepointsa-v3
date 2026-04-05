'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark' | 'light'
interface ThemeContextType { theme: Theme; toggleTheme: () => void }

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('tp-theme') as Theme
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred)
    document.documentElement.classList.toggle('dark', preferred === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('tp-theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
