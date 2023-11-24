import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-8 ' >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            Tech is intertwined with all aspects of our collective experiences, 
            and my diverse background has prepared me to be a well-rounded developer.
            </p>
            <p className='py-2 text-gray-600'>
            For the past two decades, I&rsquo;ve split my time as a business owner, visual artist, woodworker, 
            mutual-aid coordinator, and software engineer. My experience in these seemingly disparate fields 
            has given me a unique perspective and skill set that I bring to my work as a developer.
            </p>
            <p>
            From my business experience, I learned how to identify areas for efficiency, maintain product standards, and implement resources. 
            From my creative pursuits, I developed my analytical thinking, problem-solving skills, and exceptional organizational habits. 
            And from my work as a mutual-aid coordinator, I learned the importance of communication, collaboration, and community.
            </p>
            <p>
            I enjoy the challenges and opportunities that come with each new project. 
            I&rsquo;m passionate about using technology to solve problems, connect with people, 
            and create positive change in the world.
            </p>
               <Link href='/#projects'>
               <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects.
                </p>
               </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          {/* <Image src='/dksideprofile.jpeg' alt='/' width={500} height={500} /> */}
          <Image 
          src='/dksideprofile.jpeg' 
          alt='/' 
          className='rounded-xl'
          width='400' 
          height='500' 
        /> 
        </div>
      </div>
    </div>
  )
}

export default About
