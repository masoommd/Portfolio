import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function ProjectLayout() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex m-8" onClick={handleGoBack}>
        <button className="bg-gradient-to-r from-sky-700 via-green-400 to-sky-700 mt-0 p-4 text-xl font-bold font-mono rounded-full px-6">
          <b className="text-[30px] ">&#8678;</b> Back
        </button>{" "}
      </div>
      <Outlet />
    </div>
  );
}

export default ProjectLayout;
