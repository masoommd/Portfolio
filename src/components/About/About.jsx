import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-transparent ">
      <div className="container m-auto px-0 text-gray-600 md:px-12 xl:px-1 ">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 px-0 lg:items-center lg:gap-1">
          <div className="md:5/12 lg:w-5/12">
            <img className="w-96 shadow-sm" src="/about.png" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12 ">
            <h2 className="text-2xl text-gray-100 font-bold underline md:text-4xl">
              A Bit About Me
            </h2>
            <p
              className="mt-4 text-gray-200 text-lg text-justify font-semibold font-mono  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left first-letter:font-sans"
            >
              My Self{" "}
              <span className=" bg-gray-400  text-gray-700 px-1">
                Md Masoom
              </span>
              . I'm from Patna, Bihar. I have completed my graduation in{" "}
              <span className=" bg-gray-400  text-gray-700 px-1">
                {" "}
                Electronics and Communication Engineering
              </span>{" "}
              from Bhagalpur College of Engineering, Bhagalpur which comes under
              Bihar Engineering University, Patna. I have a strong interest in
              web development and enjoy solving complex problems through coding.
              I'm always eager to learn new technologies and improve my skills.
            </p>
            <p className="mt-6 text-gray-200 text-lg text-justify font-semibold font-mono ">
              I'm a dedicated{" "}
              <span className=" bg-gray-400  text-gray-700 px-1">
                web developer
              </span>{" "}
              with a passion for crafting innovative and efficient digital
              solutions. My expertise lies in leveraging data structures and
              algorithms to build robust and scalable web applications. With a
              strong foundation in{" "}
              <span className=" bg-gray-400  text-gray-700 px-1">
                {" "}
                HTML, CSS, JavaScript, Python, C/C++ (DSA), Bootstrap, Tailwind
                CSS, EJS, React, React-Redux, React-Router-DOM, React-Hook-Form,
                ShadcnUI, Framer Motion, TypeScript (basics), Node.js,
                Express.js, Next.js, NextAuth, Axios, REST API, MySQL, MongoDB,
                Cloudinary, Zod, Joi, Git, GitHub, Postman, OOP
              </span>
              .I'm committed to staying up-to-date with the latest industry
              trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
