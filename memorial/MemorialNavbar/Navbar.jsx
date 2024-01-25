import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';

const MemorialNavbar = () => {

	const asTextButton = {
		background: 'none',
    border:'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'monospace'
}

	const router = useRouter();
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);	
	}

  return (
		<ul id="memorial-navbar" className="flex justify-center items-center w-full p-6 2xl:p-6 text-xl bg-slate-100 text-[#545F66]font-bold flex-wrap">	
			<li className='ml-10 sm:ml-3 text-xl sm:text-base uppercase hover:border-b'>
				<Link href='/'>Home</Link>
	 		</li>
			<li>
				<Link className='ml-10 sm:ml-3 text-xl sm:text-base uppercase hover:border-b' href='/bio'>Dee</Link>
			</li>
			<li>
	 			<Link className='ml-10 sm:ml-3 text-xl sm:text-base uppercase hover:border-b' href='/photos'>Photos</Link>
			</li>
			<li>
				<Link className='ml-10 sm:ml-3 text-xl sm:text-base uppercase hover:border-b' href='/memories'>Memories</Link>
			</li>
			<li>
				<Link className='ml-10 sm:ml-3 text-xl sm:text-base uppercase hover:border-b' href='/portfolio'>Portfolio</Link>
			</li>
		</ul>
	);
}

export default MemorialNavbar;

