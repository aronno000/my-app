import React from 'react'
import TailwindLink from '../TailwindLink'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
    subsets: ['latin'],
    weight: '600',
})


const LetsStart = () => {
  return (
    <div className='w-[70vw]  grid grid-rows-1 grid-cols-1 justify-items-center mx-auto'>
        <TailwindLink href={'/'} className={`poppins ${poppins.className} text-center grid grid-rows-1 grid-cols-1 justify-items-center text-[#ffd639] hover:text-[#0ab3a4] hover:bg-[#c6f2e9] border-4 hover:border-[#d8b52f] bg-[#0ab3a4] px-10 py-2
        text-[2rem] mt-10 mb-9 rounded-[4rem]`}>Let&#39;s Start</TailwindLink>
    </div>
  )
}

export default LetsStart