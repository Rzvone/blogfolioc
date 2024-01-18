
'use client'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import MenuCategories from '@/components/menuCategories/MenuCategories'
import ParticleBlog from '@/components/particles/ParticleBlog'
import React from 'react'

const Blog = () => {
  return (
    <div className='min-h-[88vh] mx-auto ml-20 mr-20 text-white mt-[8vh]'>
      <ParticleBlog />
      <h1 className='z-[10] bg-pink-700 px-2 py-2.5 text-center rounded-lg'>Blogg categorie</h1>
      <div className='z-[10] flex gap-[50px] mt-10 mx-5'>
          <CardList />
          <Menu />    
      </div>
    </div>
  )
}

export default Blog