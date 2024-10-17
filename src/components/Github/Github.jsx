import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData();
    // console.log(data.repos_url);


    const [data, setData] = useState([]);
    const [repo, setRepo] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/masoommd')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
            return fetch(`${data.repos_url}`);
        })
        .then(res => res.json())
        .then(data => {
            setRepo(data);
            console.log(data);
        })
    },[])
  return (
    <div className='text-center m-4 bg-transparent text-white text-3xl p-8 border-2 rounded-lg min-h-screen flex flex-wrap justify-between '>
        <div>
        <img className=' mt-4 rounded-full border-8 border-double' src={data.avatar_url} alt="Git Pic" width={300} />
        <h1 className='mt-4 bg-transparent width={300} flex flex-wrap   p-2 pl-14  rounded-xl border-4 border-double'>{data.name}</h1>
        <div className='mt-4  w-[300px] flex flex-wrap  rounded-xl  text-sm text-justify bg-gray-500 p-1 shadow-[0_8px_16px_rgba(0,9,0,0.8)]'>{data.bio}</div>
        </div>
        <div className='bg-transparent w-[70%] mr-3 rounded-lg border-4 border-slate-900 text-indigo-400'>
        <u>Repository</u>
        <div className='flex flex-wrap justify-between'> 
            {repo.map((curr) => (
                <li className='bg-gray-800 border-2 border-slate-900 rounded-lg m-2 flex flex-wrap p-2 justify-start w-[45%] h-[48px] text-[16px]'><a href={curr.html_url}><u><i>{curr.name}</i></u></a> &nbsp; &nbsp; {curr.language}</li>
            ))}

        </div>
        </div>
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/masoommd')
    return response.json();
}