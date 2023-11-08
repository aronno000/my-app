import Image from 'next/image'
import React from 'react'
import { GiOldMicrophone } from 'react-icons/gi'
import { RiRobot2Fill } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { SiSemanticscholar } from 'react-icons/si'
import { MdPsychology } from 'react-icons/md'
import LetsStart from '../LetsStart'
import TailwindLink from '../../TailwindLink'

const Body = () => {
  return (
    <>
    <div className='mt-5 flex flex-row items-center justify-around'>
        {/* singleIcon */}
          <TailwindLink href={'pageOne/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <GiOldMicrophone className='p-5' size="100" />
          </TailwindLink>

        {/* singleIcon */}
          <TailwindLink href={'/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <TfiHeadphoneAlt className='p-5' size="100" />
          </TailwindLink>
    </div>


    <div className='mt-5 flex flex-row items-center justify-around'>

        {/* singleIcon */}
          <TailwindLink href={'/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <RiRobot2Fill className='p-5' size="100" />
          </TailwindLink>

        {/* singleIcon */}
          <TailwindLink href={'/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <SiSemanticscholar className='p-5' size="100" />
          </TailwindLink>
</div>
<div className='mt-5 flex flex-row items-center justify-around'>
        {/* singleIcon */}
          <TailwindLink href={'/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <MdPsychology className='p-5' size="100" />
          </TailwindLink>
        
        {/* singleIcon */}
        <TailwindLink href={'/'} className='bg-[#0ab3a4] justify-center w-[35vw] h-[35vw] text-center flex flex-row items-center text-white rounded-full'>
            <Image src={'/tfs.png'} alt="24/7" width={100} height={100} className='p-5' />
          </TailwindLink>
    </div>
    <LetsStart />
    </>
  )
}

export default Body