"use client"

import * as React from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("light")
  const hasLoadedSavedTheme = React.useRef(false)

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const savedTheme = window.localStorage.getItem("theme")

      hasLoadedSavedTheme.current = true

      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme)
      }
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")

    if (hasLoadedSavedTheme.current) {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])

  const setTheme = React.useCallback((nextTheme: Theme) => {
    hasLoadedSavedTheme.current = true
    setThemeState(nextTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
