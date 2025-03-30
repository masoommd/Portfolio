import React from 'react'

function Skills() {
  const skills = [
    ["HTML", "fab fa-html5"],
    ["CSS", "fab fa-css3-alt"],
    ["JavaScript", "fab fa-js"],
    ["Python", "devicon-python-plain"],
    ["C/C++ (DSA)", "devicon-cplusplus-plain"],
    ["Bootstrap", "fab fa-bootstrap"],
    ["Tailwind CSS", "devicon-tailwindcss-plain"],
    ["EJS", "fa-solid fa-e"],
    ["ReactJs", "fab fa-react"],
    ["React-Redux", "devicon-redux-original"],
    ["React-Router-DOM", "fas fa-route"],
    ["React-Hook-Form", "fas fa-check-square"],
    ["ShadcnUI", "devicon-shadcnui-plain"],
    ["Framer Motion", "devicon-framermotion-original"],
    ["TypeScript(basics)", "devicon-typescript-plain"],
    ["Node.js", "fab fa-node-js"],
    ["Express.js", "devicon-express-original"],
    ["Next.js", "devicon-nextjs-plain"],
    ["NextAuth", "devicon-oauth-plain"],
    ["Axios", "devicon-axios-plain"],
    ["RESTful API", "fas fa-server"],
    ["MySQL", "fas fa-database"],
    ["MongoDB", "devicon-mongodb-plain"],
    ["Cloudinary", "fas fa-cloud"],
    ["Zod", "fa-solid fa-z"],
    ["Joi", "fa-solid fa-j"],
    ["Git", "devicon-git-plain"],
    ["GitHub", "fab fa-github"],
    ["Postman", "devicon-postman-plain"],
    ["OOPs", "fas fa-code"]
  ];
  return (
    <div className='w-full min-h-screen bg-transparent p-16'>
      <div className='absolute w-1/4 border-2 -mt-16 h-12 rounded-full font-bold text-2xl font-mono bg-gradient-to-r from-blue-600 to-green-600 py-1 mx-96'>Skills</div>
      <div className='border-4 bg-transparent h-screen rounded-3xl border-double flex flex-wrap  justify-between items-center  p-4  border-spacing-96'>
        {skills.map((el) => (
          <div className='flex justify-between px-4 bg-gradient-to-r from-blue-900 via-green-600 to-gray-700 h-[48px] rounded-md m-auto w-1/4 border-2 border-white  text-xl p-1 font-mono font-extrabold mr-1 hover:shadow-[0_8px_16px_rgba(0,9,0,0.8)] hover:bg-slate-400'>{el[0]} &nbsp;
          <i className={`text-2xl ${el[1]}`}></i></div>
        ))}
      </div>
    </div>
  )
}

export default Skills