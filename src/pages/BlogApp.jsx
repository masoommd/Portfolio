import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'


function BlogApp() {
    let details = ["/blog1.png", "/blog2.png", "/blog3.png", "/blog4.png"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>BLOG APP</div>
            <ProjectsDetails details={details} />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
                The provided code snippet showcases several functionalities related to user authentication and post management within a React application using Appwrite services. Here's a breakdown of the code: <br />

                <u><b>1. Appwrite Service Classes:</b></u> <br /> <br />

                <u>AuthService:</u> <br />
                Handles user login, signup, and retrieving current user information.
                Uses Appwrite's Account object for interacting with user accounts. <br />
                <u>Service:</u> <br />
                Handles post creation, update, deletion, retrieval (single and list), and file upload/deletion functionalities.
                Uses Appwrite's Databases and Storage objects for interacting with the database and storage respectively. <br />
                <u><b>2. Components:</b></u> <br /> <br />

                <u>Container:</u> <br />
                A simple layout component that wraps content with a max-width container. <br />
                <u>Footer:</u> <br />
                Displays basic website information, links, and copyright notice. <br />
                <u>Header:</u> <br />
                Displays a logo, navigation links, and a logout button based on the user's authentication status. <br />
                Uses react-router-dom for navigation and useSelector from Redux to access the authentication state.
                <u><b>3. Missing Parts:</b></u> <br /> <br />

                AddPost or AllPosts that utilize the Service class for creating and managing posts.
                It's a Redux store managing the authentication state (auth.status).
                he code demonstrates the usage of Appwrite's functionalities for user authentication and post management within a React application. <br />

                The AddPost component have form fields for title, content, featured image , and other post-related data.
                Upon form submission, the component called the Service.createPost method with the collected data.
                Service.createPost would use Appwrite's Databases.createDocument method to create a new document in the designated collection with the provided post information. <br />
            </div>
            <GithubLink link1={'b'} link2={'b'}/>

        </div>
    )
}

export default BlogApp