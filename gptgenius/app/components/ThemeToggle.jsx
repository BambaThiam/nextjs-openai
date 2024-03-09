"use client"

import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  winter: 'winter',
  dracula: 'dracula',
}
  
const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter)

  const themeToggle = () => {
    if (theme === 'winter') {
      setTheme(themes.dracula)
    } else {
      setTheme(themes.winter)
    }
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <button onClick={themeToggle} className='btn btn-sm btn-outline'>
      {theme === 'winter' ? <BsMoonFill className='h-4 w-4 ' /> : <BsSunFill className='h-4 w-4 ' />}
    </button>
  )
}


export default ThemeToggle