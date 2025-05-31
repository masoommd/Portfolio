import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import GithubLink from "../components/GithubLink";

function NodeTalk() {
  let details = [
    "/nodeTalk1.png",
    "/nodeTalk2.png",
    "/nodeTalk3.png",
    "/nodeTalk4.png",
  ];
  return (
    <div className="border flex flex-wrap">
  <div className="text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double">
    NodeTalk – Real‑Time Chat + AI Collaboration Platform
  </div>

  <ProjectsDetails details={details} />

  <div className="bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300">
    <u>
      <b>Technologies & Packages Used:</b>
    </u>
    <br />
    <h3>
      <u>
        <b>Backend</b>
      </u>
    </h3>
    - Node.js (v22) with Express.js (v5) <br />
    - Socket.IO for real-time messaging <br />
    - MongoDB Atlas with Mongoose for database and schema <br />
    - Redis Cloud for session management <br />
    - Google Generative AI SDK for AI assistant <br />
    <h3>
      <u>
        <b>Frontend</b>
      </u>
    </h3>
    - React 19 for UI <br />
    - Vite 6 for fast build tooling <br />
    - Tailwind CSS 4 for styling <br />
    - WebContainers for in-browser code execution <br />
    - Socket.IO client for WebSocket communication <br />
    <u>
      <b>Deployment</b>
    </u>
    - Render for both Static Site (frontend) and Web Service (backend) <br />
    - GitHub Actions for CI (optional) <br />
    <u>
      <b>Key Features:</b>
    </u>
    <br />
    - Real-time Chat: Fast and scoped messaging via Socket.IO <br />
    - AI Assistant: Summon replies with <code>@ai</code> powered by Google Gen‑AI <br />
    - Auth & Security: JWT-based login, bcrypt-hashed passwords, CORS-guarded APIs <br />
    - Persistence: MongoDB Atlas stores users, projects & messages <br />
    - Web IDE: Run code snippets inside browser using WebContainers <br />
    - Modern Tech Stack: React, Vite, Tailwind, Socket.IO, Redis, MongoDB <br />
    - One-click Deploy: Fully configured for deployment on Render <br />
  </div>

  <GithubLink link1={"ng"} link2={"nl"} />
</div>
);
}

export default NodeTalk;
