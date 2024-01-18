
'use client'
import ParticleBlog from '@/components/particles/ParticleLogin'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='mt-[9vh] flex items-center justify-center min-h-[75vh]'>
        <ParticleBlog />
        <div className='z-[1] mt-10 bg-gray-700 lg:px-[180px] lg:py-[200px] flex flex-col gap-[100px] mb-10 rounded-md md:px-[50px] md:py-[100px] 2xs:px-10 2xs:py-10 3xs:px-5 3xs:py-5'>
            <div className='socialButton bg-pink-700 hover:bg-pink-400 hover:text-black w-[280px] text-center'>Sign in with Google</div>
            <div className='socialButton bg-black hover:bg-gray-400 hover:text-black w-[280px] text-center'>Sign in with GitHub</div>
            <div className='socialButton bg-blue-800 hover:bg-blue-400 hover:text-black w-[280px] text-center'>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage