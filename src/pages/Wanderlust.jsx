import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function Wanderlust() {
    let details = ["/wanderlust1.png", "/wanderlust2.png", "/wanderlust3.png", "/wanderlust4.png"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>WANDERLUST</div>
            <ProjectsDetails details={details} />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
                <u><b>Technologies & Packages Used:</b></u>
                - MongoDB <br />
                - Express.js <br /> 
                - Node.js <br />
                - Passport.js for Authentication <br />
                - Cloudinary for Image Storage <br />
                - Mapbox for Interactive Maps <br />
                - Connect Flash for Flash Messages <br />
                - Connect Mongo for Session Storage <br />
                - Cookie Parser for Parsing Cookies <br />
                - Dotenv for Environment Variables <br />
                - EJS for Template Rendering <br />
                - Express Session for Session Handling <br />
                - Joi for Data Validation <br />
                - Mongoose for MongoDB Object Modeling <br />
                - Multer for File Uploads <br />
                - Passport Local for Local Authentication <br />
                - Passport Local Mongoose for Mongoose <br />
                -Specific Authentication.  <br /><br />
                <u><b>Deployment</b></u>
                - Mongo Atlas for cloud Database <br />
                - Render for Live the website <br /> <br />

                <u><b>Key Features:</b></u> <br />
                - User Authentication: Login, Logout, and User Profile Section <br />
                - CRUD Operations: Add, Edit, and Delete Listings <br />
                - Review System: Add and Delete Reviews <br />
                - Account Management: Update User Account and Password <br />
                - User Data Security: Password Hashing and Encryption <br />
                - Interactive Maps: Leveraging Mapbox for Location Visualization <br />
            </div>
            <GithubLink link1={'r'} link2={'w'} />

        </div>
    )
}

export default Wanderlust