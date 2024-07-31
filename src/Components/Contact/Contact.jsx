import React from 'react'

export default function Contact() {
  return <>
    <div className='h-screen'>
  <div>
    <h1 className=' uppercase text-center pt-4 font-bold text-4xl text-[#2C3E50]'>contact section

    </h1>
  </div>
  <div className='flex items-center justify-center '>
      <hr className='w-36 border-2 border-[#2C3E50]' />
      <i class="fa-solid fa-star p-3 text-[#2C3E50]"></i>
      <hr className='w-36 border-2 border-[#2C3E50]' />

      </div>
      <div className='container  '>
          <div class="mt-2 text-center flex flex-col justify-center items-center ">
            <input type="text"  placeholder='userName'  class="border-b-2 w-1/2 rounded-b-md m-12  focus:outline-none  text-black"/>
            <input type="text"  placeholder='userAge'  class="border-b-2 w-1/2 rounded-b-md m-12  focus:outline-none  "/>
            <input type="text"  placeholder='userEmail'  class="border-b-2 w-1/2 rounded-b-md m-12  focus:outline-none  "/>
            <input type="text"  placeholder='userPassword'  class="border-b-2 w-1/2 rounded-b-md m-12  focus:outline-none  "/>
            <button className='bg-[#1ABC9C] text-white p-2 rounded-lg'>send message</button>




          </div>



        </div>


  </div>
  </>
}
