import React from 'react'

function Skills() {
  let skills = ["HTML5","CSS","JavaScript","Bootstrap","React","Node.js",'Express.js', "EJS", "MySQL", "MongoDB","REST","DSA|C++","React-Redux","React-Router", "Tailwind CSS","OOPs"]
  return (
    <div className='w-full min-h-screen bg-transparent p-16'>
      <div className='absolute w-1/4 border-2 -mt-16 h-12 rounded-full font-bold text-2xl font-mono bg-gradient-to-r from-blue-600 to-green-600 py-1 mx-96'>Skills</div>
      <div className='border-4 bg-transparent h-screen rounded-3xl border-double flex flex-wrap  justify-between  p-4  border-spacing-96'>
        {skills.map((el) => (
          <div className='bg-gray-700 h-[48px] rounded-full w-1/3 border-2 border-white border-dotted text-3xl p-1 font-mono font-extrabold mr-1'>{el}</div>
        ))}
      </div>
    </div>
  )
}

export default Skills