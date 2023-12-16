import React from 'react';
import MemorialBackground from './MemorialBackground';
import MemorialNavbar from '../MemorialNavbar/Navbar';

const MemorialHomePage = () => {
  return (
		<div id='/' className='bg-indigo-300 pb-16'>
			<MemorialBackground />
			<p className='mt-6 flex justify-center'>This page is dedicated to the memory of Dahlak Keleta, whom we lost in November of 2023.</p>

		</div>

	)
}

export default MemorialHomePage;