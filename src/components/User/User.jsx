import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='bg-transparent w-full h-screen flex flex-wrap justify-center items-center'>
      
      <div className='bg-gray-400 w-1/3 h-[250px] flex flex-wrap justify-center items-center border-2 border-gray-900 border-t-[32px] rounded-lg text-red-700 font-mono font-extrabold text-2xl '> Sorry! This page is not exist or check the URL address:) </div>
      <div className='absolute mb-56 mr-72 w-1/4 ml-56 mt-2 text-xl flex flex-wrap items-start pl-4 font-mono font-extrabold text-gray-400'>Error 404 </div>
      <Link to={'/'} className='bg-red-500 px-12 py-2 fixed rounded-full mr-68 mt-24 focus-visible text-gray-300 text-lg font-semibold'> <button >OK</button> </Link>
     </div>
  )
}

export default User