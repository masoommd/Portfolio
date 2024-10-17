import React from 'react'
import { Link } from 'react-router-dom'

function GithubLink({link1, link2='' }) {
    let link
    let webLink
    let weatherAppLink = "https://github.com/masoommd/basic-weather-app.git";
    let currencyConvertorLink = "https://github.com/masoommd/Currency-Convertor.git";
    let passwordGeneratorLink = "https://github.com/masoommd/Password-Generator.git";
    let simonGameLink = "https://github.com/masoommd/Simon-Says-Game.git";
    let todoLink = "https://github.com/masoommd/Todo-ContextApi-LocalStorage.git";
    let amazonCloneLink = "https://github.com/masoommd/Amazon_clone.git";
    let wanderlustLink = "https://github.com/masoommd/Wanderlust-Cloning-of-Airbnb-.git";
    let bloogLink = "https://github.com/masoommd/Bloog-A-blog-App.git";
    let portfolioLink = "https://github.com/masoommd/Portfolio";
    let wanderlustWebLink="https://wanderlust-cloning-of-airbnb.onrender.com/listings";
    let bloogWebLink = "https://bloog-weld.vercel.app/";

    (link1 === 'w')  ? link = `${weatherAppLink}` : (link1 === 'c') ? link = `${currencyConvertorLink}` : (link1 === 'p') ? link = `${passwordGeneratorLink}` : (link1 === 's') ? link = `${simonGameLink}` : (link1 === 't') ? link = `${todoLink}` : (link1 === 'a') ? link = `${amazonCloneLink}` : (link1 === 'b') ? link = `${bloogLink}` : (link1 === 'r') ? link = `${wanderlustLink}` : link = `${portfolioLink}`;

    if(link2.length>0){
      (link2==='w') ? webLink = `${wanderlustWebLink}` : webLink = `${bloogWebLink}`;
    }
    console.log(link1, link2);
    console.log(link, webLink);

  return (
    <div className=' w-full flex flex-wrap justify-between p-2 m-2 ml-16 mb-8 mr-16'>
        <Link to={link} >
        <button className='bg-gradient-to-r from-sky-700 via-green-400 to-sky-700 mt-0 p-4 text-xl font-bold font-mono rounded-full px-6' type='submit' >Github Repository</button>
        </Link>
        {webLink && (
            <Link to={webLink}>
        <button className='bg-gradient-to-r from-sky-700 via-green-400 to-sky-700 mt-0 p-4 text-xl font-bold font-mono rounded-full px-6'>Web site</button>
        </Link>)}
    </div>
  )
}

export default GithubLink