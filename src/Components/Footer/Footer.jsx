import React from 'react';

export default function Footer() {
  return (
    <>
      <div className='bg-[#2C3E50] min-w-full py-8 md:py-16 relative'>
        <div className='container mx-auto flex flex-col mb-5 md:flex-row justify-between items-center md:space-x-4 md:mb-5'>
          <div className='w-full md:w-1/3 text-white text-center mb-8 md:mb-0'>
            <h1 className='font-semibold capitalize text-2xl md:text-4xl'>LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='w-full md:w-1/3 text-white text-center mb-8 md:mb-0'>
            <h1 className='font-semibold capitalize text-2xl md:text-4xl'>AROUND THE WEB</h1>
            <ul className='flex justify-center my-2 space-x-3'>
              <li className='border-2 rounded-full p-2'><i className="fa-brands fa-facebook text-xl"></i></li>
              <li className='border-2 rounded-full p-2'><i className="fa-brands fa-twitter text-xl"></i></li>
              <li className='border-2 rounded-full p-2'><i className="fa-brands fa-instagram text-xl"></i></li>
              <li className='border-2 rounded-full p-2'><i className="fa-brands fa-linkedin text-xl"></i></li>
            </ul>
          </div>
          <div className='w-full md:w-1/3 text-white text-center'>
            <h1 className='font-semibold capitalize text-2xl md:text-4xl'>ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created <br />by Route</p>
          </div>
        </div>
        <div className='bg-[#1A252F] h-16 absolute bottom-0 left-0 right-0  flex items-center justify-center'>
          <p className='text-white text-center'>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
