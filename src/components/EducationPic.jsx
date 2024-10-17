import React from 'react'

function EducationPic({src}) {
  return (
    <div className='bg-transparent w-1/5 rounded-full p-1 h-1/3 m-4 hover:shadow-[0_8px_16px_rgba(0,9,0,0.8)]'>
          <img className='rounded-full ' src={src} alt="education" />
        </div>
  )
}

export default EducationPic