'use client'
import { ThemeContext } from '@/context/themeContext'
import React, { useContext } from 'react'

interface Props {
    children: string
}

const ThemeProvider = ({children}: Props) => {

    const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider