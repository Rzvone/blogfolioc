'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const ThemeToggle = () => {

  const { theme } = useContext(ThemeContext);
  console.log('this is the theme', theme)

  return (
    <div className='container-theme'>
      <Image 
        src='/images/icons/moon.png'
        alt='moon'
        width={14}
        height={14}
      />
      <div className='ball'></div>
      <Image 
        src='/images/icons/sun.png'
        alt='sun'
        width={14}
        height={14}
      />
    </div>
  )
}

export default ThemeToggle