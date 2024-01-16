import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className='flex-5 select-none md:mx-auto 2xs:ml-[-80px] 2xs:mr-[-50px] 3xs:ml-[-80px] 3xs:mr-[-50px] xs:ml-[-80px] xs:mr-[-50px] sm:mx-auto sm:mr-10'>
      <h1 className='my-[50px] ml-10 text-[28px]'>Recent Posts</h1>
      <div className='posts w-[100%]'>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList