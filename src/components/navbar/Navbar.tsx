'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/themeToggle'



const Navbar = () => {
  
  return (
    <div className='container-nav select-none'>
        <div className='logo'>raz<span className='text-green-600'>van</span></div>
        <div className='links'>
          <ThemeToggle />
          <Link href='/'>Homepage</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/blog'>Blog</Link>
          <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar