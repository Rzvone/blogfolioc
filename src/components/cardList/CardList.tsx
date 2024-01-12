import React from 'react'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className='flex-5'>
      <h1 className='my-[50px] ml-10'>Recent Posts</h1>
      <div className='posts'>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList