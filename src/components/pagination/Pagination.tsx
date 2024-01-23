'use client'

import { useRouter } from "next/navigation";

const Pagination = ({page, hasPrev, hasNext}: any) => {

  const router = useRouter();

  return (
    <div className='flex justify-between mb-5 2xs:ml-0 2xs:mr-[-40px] 3xs:ml-0 3xs:mr-[-40px] xs:ml-0 xs:mr-[-40px]'>
      <button
        className='btns'
        disabled={hasPrev === null || !hasPrev}
        onClick={() => router.push(`/?page=${page - 1}`)} 
      >
        Previous
      </button>
      <button
        className='btns'
        disabled={hasNext === null || !hasNext}
        onClick={() => router.push(`/?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination