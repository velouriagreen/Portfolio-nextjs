import React from 'react'
import Image from 'next/image'
import skillsData from './skillsData'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-16 mt-80'>
      <div className='max-w-[1240px] mx-auto flex flex-col py-8 justify-center h-full'>
        <p className='text-xl tracking-widest uppercase py-16 text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I&rsquo;ve used</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={skill.image} width='64px' height='64px' alt={skill.name} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
