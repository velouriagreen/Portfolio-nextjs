import Image from 'next/image';

const MemorialBackground = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <Image 
        src='/dahlakPurple.jpeg'
         alt='/' 
         className='object-cover'
         width='1000' 
         height='700'
      /> 	
      </div>
    )
}

export default MemorialBackground;