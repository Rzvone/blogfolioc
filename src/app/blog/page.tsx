import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'

const Blog = () => {
  return (
    <div className='min-h-[88vh] mx-auto ml-20 mr-20 text-white mt-[8vh]'>
        <h1 className='bg-pink-700 px-2 py-2.5 text-center rounded-lg'>Blogg categorie</h1>
        <div className='flex gap-[50px] mt-10'>
            <CardList />
            <Menu />    
        </div>
    </div>
  )
}

export default Blog