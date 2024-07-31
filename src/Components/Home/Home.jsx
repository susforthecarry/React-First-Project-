import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Logo from '../../../src/assets/logo.svg'

export default function Home() {
  return <>
    <div className='bg-[#1ABC9C] h-screen relative'>
    <div className='container flex justify-center items-center  flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <img src={Logo} alt=""  className='w-52'/>
      <h1 className='text-white text-5xl font-bold p-3 uppercase  '>Start Framework
      </h1>
      <div className='flex items-center'>
      <hr className='w-36 border-2 border-white' />
      <i class="fa-solid fa-star text-white p-3"></i>
      <hr className='w-36 border-2 border-white' />

      </div>      <p className='text-white'>Graphic Artist - Web Designer - Illustrator
      </p>

    </div>


  </div>
  
  </>
}
