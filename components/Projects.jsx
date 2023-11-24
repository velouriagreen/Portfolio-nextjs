import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import watchparty from '../public/assets/projects/watchparty.png'
import mykitchen from '../public/assets/projects/mykitchen.gif'
import mykitchenimg from '../public/assets/projects/mykitchenimg.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-16 mt-80'>
    <div className='max-w-[1240px] mx-auto px-2 py-24'>
      <p className='text-xl tracking-widest py-16 uppercase text-[#5651e5]'>
        Projects
      </p>
      <h2 className='py-4'>What I&apos;ve Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        
        <ProjectItem 
         title='Watch Party'
         backgroundImg={watchparty}
         projectUrl='https://thewatchparty.net/'
         tech='A website that allows users to share YouTube videos, watch together where the host and admins control playback, and everyone can live chat.'
         link='https://thewatchparty.net/'
        />
        <ProjectItem 
         title='My Kitchen'
         backgroundImg={mykitchenimg}
        //  projectUrl='https://my-kitchen.onrender.com/'
        projectUrl='/property'
         tech='A recipe app that allows users to add recipes to their personal profile.'
         link='https://my-kitchen.onrender.com/'
        />

        {/* <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
          <Image className='rounded-xl group-hover:opacity-10' src={mykitchenimg} alt='/' />
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>My Kitchen</h3>
            <p className='pb-4 pt-2 text-white text-center'>
              A recipe app that allows users to add recipes to their personal profile.
            </p>
            <Link href= 'https://my-kitchen.onrender.com/'>my-kitchen.onrender.com</Link>
          </div>
        </div> */}
        
      </div>
    </div>
  </div>
  )
}

export default Projects