import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function JobPortal() {
    let details = ["/jobportal1.png", "/jobportal2.png", "/jobportal3.png", "/jobportal4.png"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>JobSpark</div>
            <ProjectsDetails details={details} />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
                <u><b>Technologies & Packages Used:</b></u> <br />
                <h3><u><b>Backend</b></u></h3>
                - Node.js <br />
                - Express.js <br /> 
                - MongoDB <br />
                - Passport.js for Authentication <br />
                - Cookie Parser for Parsing Cookies <br />
                - Dotenv for Environment Variables <br />
                - Express Session for Session Handling <br />
                - Mongoose for MongoDB Object Modeling <br />
                - Multer for File Uploads <br />
                <h3><u><b>Frontend</b></u></h3>
                - ReactJs for UI <br />
                - React-redux for handling state centralised <br />
                - React-router-dom for routing pages <br />
                - React persisting for maintaining an application's state across   different user sessions or page reloads <br />
                <u><b>Deployment</b></u>
                - Render for Live the website <br /> <br />
                - Mongo Atlas for cloud Database <br />
                - Cloudinary for Image Storage <br />

                <u><b>Key Features:</b></u> <br />
                - Dual Interfaces: Separate interfaces for recruiters (creating/ managing jobs, applicant tracking) and students (job applications, profile management). <br />
                - Robust Functionality: Job search with filters, resume/profile picture uploads, real-time applicant management, and more! <br />
                - Modern Tech Stack: <br />
                - Frontend: React.js, React Router, React Redux, Shadcn UI, Tailwind CSS <br />
                - Backend: Node.js, Express.js, MongoDB, Cloudinary, JWT, Bcrypt <br />
                - Centralized State Management: using Redux Toolkit and Redux Persist. <br />
            </div>
            <GithubLink link1={'j'} link2={'j'} />

        </div>
    )
}

export default JobPortal