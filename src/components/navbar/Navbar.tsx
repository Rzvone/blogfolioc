import Link from 'next/link'
import React from 'react'
import AuthLinks from '../authLinks/AuthLinks'
import Image from 'next/image'




const Navbar = () => {
  

  return (
    <div className='container-nav select-none z-[1000000]'>
      <div className='social'>
        <Link href='https://www.facebook.com/BBRoggo' target='_blank'>
          <Image src="/images/icons/facebook.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link href='https://www.instagram.com/roggorzv/' target='_blank'>
          <Image src="/images/icons/instagram.png" alt="instagram" width={24} height={24}/>
        </Link>
        <Link href='https://www.linkedin.com/in/razvan-bobonea-446200139/' target='_blank'>
          <Image src="/images/icons/linkedin.png" alt="linkedin" width={24} height={24}/>
        </Link>
        <Link href="https://github.com/Rzvone" target='_blank'>
          <Image src="/images/icons/github.png" alt="github" width={24} height={24}/>
        </Link>
      </div>
      <Link href="/" className='logo'>raz<span className='text-green-600 cursor-default'>van</span></Link>
      <div className='links lg:mr-[50px]'>
        <Link href='/' className='link'>Homepage</Link>
        <Link href='/projects' className='link'>Projects</Link>
        <Link href='/about' className='link'>About</Link>
        <Link href='/contact' className='link'>Contact</Link>
        <Link href='/blog' className='link'>Blog</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar