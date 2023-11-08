import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'
import { RiTaobaoLine } from 'react-icons/ri'
import TailwindLink from '../TailwindLink'


const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
})

const NavBar = () => {
  return (
    <div className='flex flex-row items-center justify-center sticky top-0 rounded-md pb-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 pt-2'>
        <Image src={'/logo.png'}
        width={70}
        height={70}
        alt="logo"
        />

        <TailwindLink href={'http://localhost:3000'} className={`poppins ${poppins.className} text-[#1db3a4] ml-[1.5rem] text-[2.12rem] font-bold`}>Relaxer City</TailwindLink>
    </div>
  )
}

export default NavBar