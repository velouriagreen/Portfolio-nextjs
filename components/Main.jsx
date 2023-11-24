import React, {useEffect} from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {


  return (
    <>
    <div 
      id='home' 
      className='w-full h-screen text-center '
      >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 '>
            Lets build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'> Dahlak</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A Full-stack DevOps Web Developer
            </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a full-stack web developer building and designing 
            exceptional digital experiences. Currently I&apos;m a devops platform engineer. Most recently before that, I was creating an application 
            for a school course management platform using NextJS and other modern technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedin />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main
