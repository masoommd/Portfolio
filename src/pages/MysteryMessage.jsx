import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import GithubLink from "../components/GithubLink";

function MysteryMessage() {
  let details = [
    "/mysterymessage1.png",
    "/mysterymessage2.png",
    "/mysterymessage3.png",
    "/mysterymessage4.png",
  ];
  return (
    <div className="border flex flex-wrap">
      <div className="text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double">
        Mystery Message
      </div>
      <ProjectsDetails details={details} />
      <div className="bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 ">
        <u>
          <b>Technologies & Packages Used:</b>
        </u>{" "}
        <br />
        <h3>
          <u>
            <b>Backend</b>
          </u>
        </h3>
        - Next.js <br />
        - NextAuth.js for Authentication <br />
        - MongoDB for Database <br />
        - Axios for API Requests <br />
        - Zod for Schema Validation <br />
        - Cloud Storage for media <br />
        <h3>
          <u>
            <b>Frontend</b>
          </u>
        </h3>
        - ReactJs for UI <br />
        - React Hook Form for form handling <br />
        - Tailwind CSS for Styling <br />
        - Google AI for message suggestions <br />
        <u>
          <b>Deployment</b>
        </u>
        - Vercel for live deployment <br /> <br />
        - MongoDB Atlas for cloud database <br />
        <u>
          <b>Key Features:</b>
        </u>{" "}
        <br />
        - User Authentication: Secure login with password reset and account
        verification. <br />
        - Message Management: Users can send, receive, and manage messages.{" "}
        <br />
        - AI-powered Suggestions: Messages are enhanced with suggestions powered
        by Google AI. <br />
        - User-friendly interface with easy-to-use forms and interactions.{" "}
        <br />
        - Modern Tech Stack: <br />
        - Frontend: React.js, Next.js, React Hook Form, Tailwind CSS, Google AI{" "}
        <br />
        - Backend: Next.js, MongoDB, NextAuth.js, Zod <br />
        - AI Integration: Google AI for message enhancement. <br />
      </div>

      <GithubLink link1={"ml"} link2={"mg"} />
    </div>
  );
}

export default MysteryMessage;
