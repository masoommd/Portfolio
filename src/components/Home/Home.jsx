import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-gray-200 rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold underline sm:text-5xl">
                            <span className=' bg-gray-200 text-gray-950 '><u>MD</u></span> MASOOM
                            </h2>
                            <span className="hidden sm:block text-4xl bg-gray-600 text-gray-100 rounded-md px-2 py-1">
                            <Typewriter
                            
                            options={{
                              strings: ['I am a skilled web developer with a strong understanding of data structures and algorithms......'],
                              autoStart: true,
                              loop: 1,
                              
                            }}
                          />
                            </span>
                        

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="about"
                        >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.50664 1.99434C4.01459 1.99434 1.99438 4.01455 1.99438 6.5066V17.4934C1.99438 19.9854 4.01459 22.0056 6.50664 22.0056H17.4934C19.9855 22.0056 22.0057 19.9854 22.0057 17.4934V6.50659C22.0057 4.01454 19.9855 1.99434 17.4934 1.99434H6.50664ZM3.69438 6.5066C3.69438 4.95343 4.95347 3.69434 6.50664 3.69434H17.4934C19.0466 3.69434 20.3057 4.95343 20.3057 6.50659V17.4934C20.3057 19.0465 19.0466 20.3056 17.4934 20.3056H6.50664C4.95347 20.3056 3.69438 19.0465 3.69438 17.4934V6.5066ZM9.82939 9.28276C9.81979 9.17136 9.93572 9.09232 10.0359 9.14197L15.1016 11.6521C15.1999 11.7007 15.2094 11.8372 15.1187 11.899L12.8286 13.4603L10.5385 15.0215C10.4479 15.0833 10.3243 15.0246 10.3148 14.9154L9.82939 9.28276ZM10.7907 7.61871C9.50267 6.98049 8.01224 7.99658 8.13567 9.42873L8.62112 15.0614C8.74219 16.466 10.3311 17.2204 11.4961 16.4262L13.0839 15.3437L14.004 16.6934C14.2684 17.0813 14.7972 17.1813 15.1851 16.9169C15.573 16.6525 15.6731 16.1237 15.4086 15.7358L14.4885 14.3861L16.0763 13.3036C17.2413 12.5095 17.1197 10.7548 15.8564 10.1288L10.7907 7.61871Z" fill="#1C1C1C"/>
</svg>
                            &nbsp; Know more...
                        </Link> 
                        
                                

                    </div>
                </div>

                <div className="absolute  inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-1/3  rounded-3xl border-4 border-gray-500" src='/mk.gif' alt="image1" />
                </div>
            </aside>
        </div>
    );
}
