import React from 'react'
import img1 from '../../../src/assets/poert1.png'
import img2 from '../../../src/assets/port2.png'
import img3 from '../../../src/assets/port3.png'

export default function Port() {
  function whenClick(){
  console.log('Hi');

  }
  return <>
   <div className='h-screen'>
   <div className=' lighBox fixed top-0 bottom-0 right-0 left-0 bg-slate-500 bg-opacity-55 z-20 hidden'>
    <div className='container flex justify-center items-center  fixed  top-40 left-60  '>
    <img src={img2} alt="" className="rounded-lg"  />

    </div>
   </div>


        <div>
          <h1 className='uppercase text-center pt-4 font-bold text-4xl text-[#2C3E50]'>portfolio component</h1>
        </div>
        <div className='flex items-center justify-center '>
          <hr className='w-36 border-2 border-[#2C3E50]' />
          <i className="fa-solid fa-star p-3 text-[#2C3E50]"></i>
          <hr className='w-36 border-2 border-[#2C3E50]' />
        </div>
        <div className="container mx-auto">
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center py-16'>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img1} alt="" className="rounded-lg" id='img1' onClick={whenClick} />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img2} alt="" className="rounded-lg" />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img3} alt="" className="rounded-lg" />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center py-16'>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img1} alt="" className="rounded-lg" />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img2} alt="" className="rounded-lg" />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4'>
              <div className="relative group">
                <img src={img3} alt="" className="rounded-lg" />
                <div className="bg-[#1ABC9C] absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-200">
                  <i className="fa-solid fa-plus text-white text-6xl "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}
