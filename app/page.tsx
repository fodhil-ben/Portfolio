import Image from 'next/image'
import Me from '../public/MyPicture.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
export default function Home() {
  return (
    <div className='container px-10 md:px-20 m-auto mt-14 md:mt-32 grid md:flex md:flex-row md:gap-16'>
      <div className='pb-10 shadow-md dark:shadow-gray-800 md:w-150 px-5'>
        <Image
          src={Me}
          priority={true}
          alt='Picture Of me'
          className='w-60 m-auto md:w-80 rounded-full'
          placeholder='blur'
        />
        <div className='grid gap-5 mt-5'>
          <h1 className='text-center font-bold text-3xl'>Fodhil Benhiba</h1>
          <h2 className='text-center text-lg '>Web developer | Cyber Security enthusiast | CTF player</h2>
          <div className='flex justify-center gap-5 text-2xl'>
            <a href='https://github.com/fodhil-ben'><BsGithub></BsGithub></a>
            <a href='https://www.linkedin.com/in/fodhil-benhiba-446623276/'><BsLinkedin></BsLinkedin></a>
            <a href='/Contact'><HiOutlineMail></HiOutlineMail></a>
          </div>
        </div>
      </div>
      <div className='text-xl text-center md:text-left box-border mt-10'>
        <p>
          Hello There! I&apos;m Fodhil, a 19 years old Computer Science student and a dedicated Web
          developer whith passion in cyber security based in Algeria
        </p>
        <p>I build dynamic web applications with fully responsive front end with a scalable and efficient backend </p>
      </div>
    </div>
  )
}
