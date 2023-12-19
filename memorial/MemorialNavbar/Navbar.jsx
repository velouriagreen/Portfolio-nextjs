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
	//Make the button children dynamic with useRouter?
	const router = useRouter();
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);	
	}
	//TODO: Make this lists dynamic with router?
  return (
		<ul id="memorial-navbar" className="flex justify-center items-center w-full p-6 2xl:p-6 text-xl bg-indigo-300 text-[#545F66]font-bold">
		
					<li className='ml-10 text-xl uppercase hover:border-b'>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link className='ml-10 text-xl uppercase hover:border-b' href='/photos'>Photos</Link>
					</li>
					<li>
						<Link className='ml-10 text-xl uppercase hover:border-b' href='/memories'>Memories</Link>
					</li>
					<li>
						<Link className='ml-10 text-xl uppercase hover:border-b' href='/portfolio'>Portfolio</Link>
					</li>
		</ul>
	);
}

export default MemorialNavbar;

