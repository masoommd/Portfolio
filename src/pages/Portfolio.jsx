import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function Portfolio() {
    let details = ["/portfolio1.png", "/portfolio2.png", "/portfolio3.png", "/portfolio4.png"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>PORTFOLIO</div>
            <ProjectsDetails details={details}  />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
                The technology used in the making of my portfolio website are 
                <p>
                <u><b>React Components</b></u>
                React component is used for making different types of component which is directly render on the page.Such as <br />
                <li>
                    About Components
                </li>
                <li>
                    Contact Components
                </li>
                <li>
                    Education Components
                </li>
                <li>
                    Footer Components
                </li>
                <li>
                    Header Components
                </li>
                <li>
                    Github Components
                </li>
                <li>
                    Card Components
                </li>
                <li>
                    Logo Components
                </li>
                <li>
                    Education Detail Components
                </li>
                <li>
                    Projects Image Components
                </li>
                <u><b>React Router Dom :</b></u> <br />
                React Router Dom is used for making the navigation of the different pages. Such as  <br />
                About, Contact, Education, Projects, and Github. <br />
                <u><b>Tailwind CSS :</b></u> <br />
                Tailwind CSS is used for making the design of the website. <br />
                <u><b>React Icons :</b></u> <br />
                React Icons is used for making the icons of the website. <br />
                </p> <br />
                <u><b>API's Handling</b></u>
                <p>
                    Here we use github API's to extract data from github like repositories, bio, name, followers, etc.
                </p>
                
            </div>
            <GithubLink link1={'p'}/>

            </div>
  )
}

export default Portfolio