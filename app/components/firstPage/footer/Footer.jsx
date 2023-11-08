import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import TailwindLink from '../../TailwindLink'

const Footer = () => {
  return (
    <div className='grid grid-rows-1 grid-cols-2  justify-items-center pb-2'>
      <TailwindLink className='justify-self-end mr-2 text-blue-800' href={'/'}><BsFacebook size={45}/></TailwindLink>
      <TailwindLink className='justify-self-start ml-2' href={'/'}><FcGoogle size={50}/></TailwindLink>
    </div>
  )
}

export default Footer