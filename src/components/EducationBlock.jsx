import React from 'react'

function EducationBlock({content}) {
  return (
    <>
        <div className='bg-transparent w-3/5 m-4 text-justify p-4 text-xl font-mono h-1/3 border-2 border-slate-400 rounded-lg shadow-[0_8px_16px_rgba(0,9,0,0.8)] hover:bg-gray-600 text-gray-100' key={content}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        
        </div>
    </>
  )
}

export default EducationBlock