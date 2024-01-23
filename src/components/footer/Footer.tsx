import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='z-[10] mt-[10px] flex justify-between footer h-auto select-none'>
      <div className="flex-1 flex flex-col gap-[14px] mx-10 my-10">
        <div className='flex items-center gap-[10px]'>
          <Link href="/">
            <h1 className='text-[24px]'>raz<span className='text-green-600'>van</span></h1>
          </Link>
        </div>
        <p className='text-gray-400 sm:hidden xs:hidden 2xs:hidden md:block'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae laudantium aliquid neque 
          ad aspernatur corporis consequuntur at asperiores. At, quia quidem? Delectus numquam debitis 
          harum aperiam dignissimos, quidem exercitationem!
        </p>
        <div className='mt-1 flex gap-[10px]'>
          <Link href='https://www.facebook.com/BBRoggo' target='_blank'>
            <Image src="/images/icons/facebook.png" alt="facebook" width={18} height={18}/>
          </Link>
          <Link href='https://www.instagram.com/roggorzv/' target='_blank'>
            <Image src="/images/icons/instagram.png" alt="instagram" width={18} height={18}/>
          </Link>
          <Link href='https://www.linkedin.com/in/razvan-bobonea-446200139/' target='_blank'>
            <Image src="/images/icons/linkedin.png" alt="linkedin" width={18} height={18}/>
          </Link>
          <Link href="https://github.com/Rzvone" target='_blank'>
            <Image src="/images/icons/github.png" alt="github" width={18} height={18}/>
          </Link>
        </div>
      </div>
      <div className='flex-1 flex gap-10 mr-10 justify-around'>
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-green-600 underline'>Links</span>
          <Link href='/' className='footer-link'>Homepage</Link>
          <Link href='/projects' className='footer-link'>Projects</Link>
          <Link href='/about' className='footer-link'>About</Link>
          <Link href='/contact' className='footer-link'>Contact</Link>
          <Link href='/blog' className='footer-link'>Blog</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-green-600 underline'>Tags</span>
          <Link href='/frontend' className='footer-link'>Frontend</Link>
          <Link href='/backend' className='footer-link'>Backend</Link>
          <Link href='/devops' className='footer-link'>DevOps</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer