import React from 'react'
export default function About() {
  return <>
  <div className='bg-[#1ABC9C] h-screen relative'>
    <div className='container flex justify-center items-center  flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <h1 className='text-white text-5xl font-bold uppercase  p-3'>about component
      </h1>
      <div className='flex items-center'>
      <hr className='w-36 border-2 border-white' />
      <i class="fa-solid fa-star text-white p-3"></i>
      <hr className='w-36 border-2 border-white' />

      </div>
    

   <div className='flex my-3 mx-3'>

   <p className='text-white w-1/2 mx-2'>  Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br />optional SASS stylesheets for easy customization.</p>
      <p className='text-white w-1/2 mx-2'>  Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br />optional SASS stylesheets for easy customization.</p>

   </div>
    </div>


  </div>
  </>
}
