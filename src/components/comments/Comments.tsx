import Image from 'next/image'
import Link from 'next/link'

const Comments = () => {

    const status = "authenticated"


  return (
    <div className='mt-10 select-none'>
        <h1 className="text-3xl text-gray-300 mb-8">Comments</h1>
        {status === "authenticated" ? (
            <div className='flex flex-wrap center justify-between gap-8 mb-10'>
                <textarea name='comment' id='comment' cols={30} rows={10} className='w-full bg-gray-800 p-2 rounded-lg resize-none mt-5' placeholder='Write a comment...'></textarea>
                <button className='bg-gray-800 py-4 px-5 hover:bg-gray-200 hover:text-black rounded-lg font-semibold'>Comment</button>
            </div>
        ) : (
            <Link href='/login'>Login to comment</Link>
        )}
        <div className='mb-10'>
            <div className='mb-10'>
                <div className='flex items-center gap-5 mb-5'>
                    <Image src='/images/images/style.png' width={50} height={50} alt='user avatar' className='rounded-full w-[50px] h-[50px] object-cover' draggable={false} />
                    <div className='flex flex-col gap-1.25 text-gray-400'>
                        <span className='font-semibold'>username</span>
                        <span className='text-[14px]'>11 January 2024</span>
                    </div>
                </div>
                <p className='text-[18px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </p>
            </div>
            <div className='mb-10'>
                <div className='flex items-center gap-5 mb-5'>
                    <Image src='/images/images/style.png' width={50} height={50} alt='user avatar' className='rounded-full w-[50px] h-[50px] object-cover' draggable={false} />
                    <div className='flex flex-col gap-1.25 text-gray-400'>
                        <span className='font-semibold'>username</span>
                        <span className='text-[14px]'>11 January 2024</span>
                    </div>
                </div>
                <p className='text-[18px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </p>
            </div>
            <div className='mb-10'>
                <div className='flex items-center gap-5 mb-5'>
                    <Image src='/images/images/style.png' width={50} height={50} alt='user avatar' className='rounded-full w-[50px] h-[50px] object-cover' draggable={false} />
                    <div className='flex flex-col gap-1.25 text-gray-400'>
                        <span className='font-semibold'>username</span>
                        <span className='text-[14px]'>11 January 2024</span>
                    </div>
                </div>
                <p className='text-[18px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments