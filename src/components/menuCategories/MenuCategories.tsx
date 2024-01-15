import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
  return (
    <div className='mt-[35px] mb-[60px] flex wrap gap-10 '>
        <Link 
            href="/blog?cat=frontend"
            className='menuCategories bg-pink-700 w-full z-[1000] hover:bg-pink-400 hover:text-black'
            draggable={false}
        >
            Frontend
        </Link>
        <Link href="/blog?cat=backend" className='menuCategories  bg-yellow-700 w-full z-[1000] hover:bg-yellow-400 hover:text-black' draggable={false}>
            Backend
        </Link>
        <Link href="/blog?cat=devops" className='menuCategories  bg-blue-700 w-full z-[1000] hover:bg-blue-400 hover:text-black' draggable={false} >
            Devops
        </Link>
    </div>
  )
}

export default MenuCategories