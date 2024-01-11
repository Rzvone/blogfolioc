'use client'
import { Bars3Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React, { useState } from 'react'

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  // temp
  const status = 'notauthenticated'

  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href='/login' className='login'>Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className='cursor-pointer'>Logout</span>
        </>
      )}
      <Bars3Icon className='burger' onClick={() => setOpen(!open)}/>
      {open && (
        <div className='burger-menu'>
          <Link href='/' className='link-burger'>Homepage</Link>
          <Link href='/about' className='link-burger'>About</Link>
          <Link href='/contact' className='link-burger'>Contact</Link>
          <Link href='/blog' className='link-burger'>Blog</Link>
          {status === 'notauthenticated' ? (
            <Link href='/login' className='link-burger'>Login</Link>
          ) : (
            <>
              <Link href='/write' className='link-burger'>Write</Link>
              <span className='cursor-pointer'>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks