import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import GithubLink from "../components/GithubLink";

function Fitclub() {
  let details = [
    "/fitclub1.png",
    "/fitclub2.png",
    "/fitclub3.png",
    "/fitclub4.png",
  ];
  return (
    <div className="border flex flex-wrap">
      <div className="text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double">
        FitClub - A Gymsite
      </div>
      <ProjectsDetails details={details} />
      <div className="bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 ">
        This project, <b>FITCLUB</b>, is a fitness website built using React. It
        showcases a modern, responsive design with various sections like hero
        banners, programs, testimonials, and plans. Below is the detailed
        structure and functionality of the project: <br />
        <b>Structure</b>/ <br />
        ├── src/ # Source code <br />
        │ ├── App.css # Global styles <br />
        │ ├── App.js # Main app component <br />
        │ ├── index.css # Default styles <br />
        │ ├── index.js # Entry point
        <br />
        │ ├── assets/ # Images and SVGs <br />
        │ ├── components/ # Reusable components <br />
        │ │ ├── Footer/ <br />
        │ │ ├── Header/ <br />
        │ │ ├── Join/ <br />
        │ │ ├── Plans/ <br />
        │ │ ├── Hero/ <br />
        │ │ ├── Program/ <br />
        │ │ ├── Reasons/ <br />
        │ │ └── Testimonials/ <br />
        │ └── data/ # Static data for components <br />
        │ ├── plansData.js <br />
        │ ├── programsData.js <br />
        │ └── testimonialsData.js <br />
        <br />
        <b>
          <u>Key Features</u>
        </b>{" "}
        <br />
        <p>
          <b>Hero Section</b>:
          <ul>
            <li>Displays a banner with a motivational tagline.</li>
            <li>Includes animated elements using framer-motion. </li>
            <li>
              Shows statistics like expert coaches, members joined, and fitness
              programs.{" "}
            </li>
          </ul>
        </p> <br />
        <p>
          <b>Programs Section</b>:
          <ul>
            <li>
              Lists different fitness programs (e.g., Strength Training, Cardio
              Training).
            </li>
            <li>Uses static data from programsData.js. </li>
          </ul>
        </p> <br />
        <p>
          <b>Reasons Section</b>:
          <ul>
            <li>Highlights reasons to choose the fitness club.</li>
            <li>Displays partner logos (e.g., Adidas, Nike).</li>
          </ul>
        </p> <br />
        <p>
          <b>Plans Section</b>:
          <ul>
            <li>Offers membership plans (Basic, Premium, Pro). </li>
            <li>Each plan includes features and pricing.</li>
            <li>Each plan includes features and pricing.</li>
            <li></li>
          </ul>
        </p> <br />
        <p>
          <b>Testimonials Section</b>:
          <ul>
            <li>Rotates through customer testimonials with animations.</li>
            <li> Uses framer-motion for smooth transitions.</li>
          </ul>
        </p>
        <p> <br />
          <b>Join Section</b>:
          <ul>
            <li>Includes a form to collect user emails.</li>
            <li>Integrates with emailjs for sending emails.</li>
          </ul>
        </p>
        <p>
          <b>Footer Section</b>:
          <ul>
            <li>Displays social media links and the company logo.</li>
          </ul>
        </p> <br />
        <b>Technologies Used</b>
        <p>
          <u>React</u>: Component-based architecture for building the UI. <br />
          <u>CSS</u>: Custom styles for responsive design. <br />
          <u>Framer Motion</u>: Animations for smooth transitions. <br />
          <u>EmailJs</u>: Email integration for the "Join Now" form. <br />
          <u>React Scroll</u>: Smooth scrolling for navigation. <br />
        </p> <br />
        <b>How It Works</b> <br />
        <u>Navigation</u>: The Header component provides navigation links to
        different <br />
        <u>Join Section</u>: Includes a form to collect user emails. Integrates
        with emailjs for sending emails. <br />
        <u>Footer Section</u>: Displays social media links and the company logo.
        <br />
        
      </div>
      <GithubLink link1={"fg"} link2={"fl"} />
    </div>
  );
}

export default Fitclub;
