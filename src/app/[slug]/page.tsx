'use client'

import Comments from '@/components/comments/Comments'
import Menu from '@/components/menu/Menu'
import ParticleBlog from '@/components/particles/ParticleBlog'
import Image from 'next/image'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='mx-auto md:mx-20 text-white mt-[8vh] select-none sm:mx-10 xs:mx-10 2xs:mx-10 3xs:mx-10'>
      <ParticleBlog />
      <div className='flex items-center gap-[50px] z-[10000000]'>
        <div className='textContainer flex-1'>
          <h1 className='text-5xl font-bold mb-[50px]'>Title</h1>
          <div className='flex items-center gap-5'>
            <div className=''>
              <Image src="/images/images/code.jpg" alt="avatar" width={50} height={50} className='rounded-full object-cover w-[50px] h-[50px]' draggable={false}/>
            </div>
            <div className='flex flex-col gap-1.5 text-gray-400'>
              <span className='text-[20px] font-semibold'>username</span>
              <span className='date'>10 January 2024</span>
            </div>
          </div>
        </div>
        <div className='flex-1 relative'>
          <Image src="/images/images/style.png" alt="" width={200} height={200} className='object-cover h-[350px] w-auto mx-auto md:block sm:hidden xs:hidden 2xs:hidden 3xs:hidden' draggable={false} />
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='flex-5 mt-[60px]'>
          <div className="description">
            <p className='article-p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum.
              Laudantium eveniet, ea ipsa facilis velit, aperiam et quibusdam soluta iusto
              nemo dolorum quisquam magnam. Aliquam debitis iste facilis itaque!
            </p>
            <h2 className='text-[34px]'>Some small title</h2>
            <p className='article-p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum.
              Laudantium eveniet, ea ipsa facilis velit, aperiam et quibusdam soluta iusto
              nemo dolorum quisquam magnam. Aliquam debitis iste facilis itaque!
            </p>
            <p className='article-p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum.
              Laudantium eveniet, ea ipsa facilis velit, aperiam et quibusdam soluta iusto
              nemo dolorum quisquam magnam. Aliquam debitis iste facilis itaque!
            </p>
            <p className='article-p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, nostrum.
              Laudantium eveniet, ea ipsa facilis velit, aperiam et quibusdam soluta iusto
              nemo dolorum quisquam magnam. Aliquam debitis iste facilis itaque!
            </p>
          </div>
          <div className='comment'>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage