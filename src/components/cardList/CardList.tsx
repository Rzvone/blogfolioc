
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'


const getData = async ({page}: any) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store", // delete this only show for demo
  })

  if(!res.ok) {
    throw new Error("Fetching went wrong")
  }

  return res.json()

}

const CardList = async ({page}: any) => {

  const { posts, count } = await getData({page})
  // console.log(posts.map((post: any) => post)) keeping this as a reference cause i forget how to map through an array of objects

  const POST_PER_PAGE = 4

  const  hasPrev = POST_PER_PAGE * (page - 1) > 0
  const  hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className='flex-5 select-none md:mx-auto 2xs:ml-[-80px] 2xs:mr-[-50px] 3xs:ml-[-80px] 3xs:mr-[-50px] xs:ml-[-80px] xs:mr-[-50px] sm:mx-auto sm:mr-10'>
      <h1 className='my-[50px] ml-10 text-[28px]'>Recent Posts</h1>
      <div className='posts w-[100%]'>
        {posts?.map((item: { id: any }) => (
            <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList