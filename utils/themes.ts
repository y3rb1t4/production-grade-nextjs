import { isClient } from './isSSR'

export function setTheme(themeName) {
  if (isClient()) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
  }
}

export function keepTheme() {
  if (isClient()) {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
      } else if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light')
      }
    } else {
      setTheme('theme-dark')
    }
  }
}
