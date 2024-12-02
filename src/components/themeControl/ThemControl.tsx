import { useState } from 'react'
import { Themes } from 'defines'

export const ThemeControl = () => {
  const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT)
  const changeTheme = (theme: Themes) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  return (
    <div>
      {currentTheme === Themes.DARK ? (
        <button className='text-primary' onClick={() => changeTheme(Themes.LIGHT)}>
          Change Theme Dark
        </button>
      ) : (
        <button className='text-primary' onClick={() => changeTheme(Themes.DARK)}>
          Change Theme Light
        </button>
      )}
    </div>
  )
}
