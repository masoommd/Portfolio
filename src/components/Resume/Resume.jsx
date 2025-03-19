import React from "react";

function Resume() {
  const onButtonClick = () => {
    const pdfUrl = "Md_Masoom_New_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "masoom_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8" onClick={onButtonClick}>
                    Download PDF
                </button>
      <iframe
        src="Md_Masoom_New_Resume.pdf"
        frameborder="0" title="Resume" 
        className="h-screen w-[100%]"
      ></iframe>
      
    </div>
  );
}

export default Resume;
