import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className='flex-2 mr-5 sm:hidden md:hidden xs:hidden 2xs:hidden 3xs:hidden lg:block select-none'>
      <h2 className='text-gray-600 text-[16px] font-semibold'>What&apos;s hot</h2>
      <h1 className='text-[28px] mt-[40px] mb-5'>Most Popular</h1>
      <div className='flex flex-col items-center gap-[35px] mt-[35px] mb-[60px] ml-[-130px]'>
        <Link href='/' className='flex items-center gap-[20px]' >
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-pink-600 text-center w-fit '>Frontend</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-[20px] mb-5' >
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-[#ff7857] text-center w-fit '>Backend</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-[20px]' >
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-blue-700 text-center w-fit '>DevOps</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
      </div>
      <MenuCategories />
      <h2 className='text-gray-600 text-[16px] font-semibold'>Chosen by editor</h2>
      <h1 className='text-[28px] mt-[40px] mb-5'>Editor&apos; pick</h1>
      <div className='flex flex-col items-center gap-[35px] mt-[35px] mb-[60px]'>
        <Link href='/' className='flex items-center gap-[20px]' >
          <div className='flex-1 aspect-square relative mb-5'>
            <Image 
              src="/images/images/code.jpg"
              alt="code"
              width={150}
              height={150}
              className='rounded-full border border-slate-600 object-cover md:hidden lg:block lg:h-[100px] lg:w-[100px] xl:w-full xl:h-full sm:hidden xs:hidden 2xs:hidden 3xs:hidden'
              draggable={false}
            />
          </div>
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-pink-600 text-center w-fit '>Frontend</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-[20px] mb-5' >
          <div className='flex-1 aspect-square relative'>
            <Image 
              src="/images/images/code.jpg"
              alt="code"
              width={150}
              height={150}
              className='rounded-full border border-slate-600 object-cover md:hidden lg:block lg:h-[100px] lg:w-[100px] xl:w-full xl:h-full sm:hidden xs:hidden 2xs:hidden 3xs:hidden'
              draggable={false}
            />
          </div>
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-[#ff7857] text-center w-fit '>Backend</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
        <Link href='/' className='flex items-center gap-[20px]' >
          <div className='flex-1 aspect-square relative'>
            <Image 
              src="/images/images/code.jpg"
              alt="code"
              width={150}
              height={150}
              className='rounded-full border border-slate-600 object-cover md:hidden lg:block lg:h-[100px] lg:w-[100px] xl:w-full xl:h-full sm:hidden xs:hidden 2xs:hidden 3xs:hidden'
              draggable={false}
            />
          </div>
          <div className='flex flex-4 flex-col gap-2'>
            <span className='px-[5px] py-[8px] rounded-full text-[12px] bg-blue-700 text-center w-fit '>DevOps</span>
            <h3 className='text-[18px] font-semibold text-gray-400'>Some random text here</h3>
            <div className='text-[12px]'>
              <span className='username'>Username</span>
              <span className='text-gray-600'> - Date</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu