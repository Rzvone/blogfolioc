'use client'
import Link from 'next/link'
import React, { useState } from 'react'



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  
  return (
    <div className='container-nav'>
        <div className='logo'>raz<span className='text-green-600'>van</span></div>
        <div className='links'>
          <Link href='/'>Homepage</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/blog'>Blog</Link>
        </div>
    </div>
  )
}

export default Navbar