import React from 'react';
import MemorialBackground from './MemorialBackground';

const MemorialHomePage = () => {
  return (
		// <div id='/' className='bg-indigo-300 pb-16'>
    <div id='/' style={{backgroundColor: "rgb(236 240 243 / var(--tw-bg-opacity))"}}>   
			<MemorialBackground />
			<p className='mt-6 flex justify-center italic'>This page is dedicated to the memory of Dahlak Keleta, whom we lost in November of 2023.</p>
		</div>
	)
};

export default MemorialHomePage;