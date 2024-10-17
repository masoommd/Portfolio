import React from 'react'

function ProjectsDetails({details=[],}) {
  return (
    <div>
        <span className='flex flex-wrap flex-row w-full justify-center items-center p-4'>
            {details.map((el) => (
                <span className='p-2 border-2 m-4'><img src={el} alt="image" /></span>
            ))}
            
            
            </span>
    </div>
  )
}

export default ProjectsDetails