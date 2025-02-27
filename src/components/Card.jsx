import React from 'react'
import { Link } from 'react-router-dom'

function Card({src,title, className='',path}) {
  return (
    <div className={`bg-gray-500 h-[35%] w-1/5 mr-4 border-2 border-slate-800 rounded-2xl p-2 hover:shadow-[0_8px_16px_rgba(0,9,0,0.8)] hover:bg-slate-400 ${className}`} key={title}>
      <Link to={path}>
      
        <div className=''>
            <img className='h-36 w-full rounded-md' src={src} alt="image" />
        </div>
        <div className='text-2xl font-bold font-mono text-center mt-1 text-gray-900'>
            {title}
            </div>
            </Link>
    </div>
  )
}

export default Card