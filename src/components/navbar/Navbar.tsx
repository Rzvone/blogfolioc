import Link from 'next/link'
import React from 'react'
import AuthLinks from '../authLinks/AuthLinks'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'



const Navbar = () => {
  
  return (
    <div className='container-nav select-none'>
      <div className='social'>
        <Image src="/images/icons/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/images/icons/facebook.png" alt="instagram" width={24} height={24}/>
        <Image src="/images/icons/facebook.png" alt="linkedin" width={24} height={24}/>
        <Image src="/images/icons/facebook.png" alt="github" width={24} height={24}/>
      </div>
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