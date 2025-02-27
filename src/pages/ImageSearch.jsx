import React from "react";
import ProjectsDetails from "../components/ProjectsDetails";
import GithubLink from "../components/GithubLink";

function ImageSearch() {
  let details = ["/image1.png", "/image2.png", "/image3.png", "/image4.png"];
  return (
    <div className="border flex flex-wrap">
      <div className="text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double">
        Image Search App
      </div>
      <ProjectsDetails details={details} />
      <div className="bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 ">
        <b>
          <u>Functionality:</u>
        </b>{" "}
        <br />
        <p>
          Image Search: Allows users to search for images using keywords.
          Fetches image results from the Unsplash API. Displays the search
          results in a grid format. Pagination (Show More): Loads initial search
          results. Provides a "Show More" button to load subsequent pages of
          results. Implements incremental loading, enhancing performance.
          Displaying Images: Displays small preview images in the search
          results. Provides image alt descriptions for accessibility. Creates
          links to the original Unsplash image page. Error Handling: Displays a
          user friendly error message if the image fetch fails
        </p>{" "}
        <br />
        <u>
          <b>Technologies:</b>
        </u>{" "}
        <br />
        <p>
          HTML: Structures the webpage (forms, input fields, image containers).
          CSS: (Implied) Styles the webpage (layout, appearance of elements).
          JavaScript: Handles user interactions (form submissions, button
          clicks). Fetches data from the Unsplash API using fetch. Dynamically
          creates and appends HTML elements to display search results. Handles
          the logic for pagination. Unsplash API: Provides access to a vast
          library of high-quality images. Enables image search functionality
          through its search endpoint. DOM Manipulation: JavaScript is used to
          dynamically add, remove, and alter HTML elements in the Document
          Object Model.
        </p>
        . <br />
        <u>
          <b>Key Features:</b>
        </u>{" "}
        <br />
        <p>
          Asynchronous Data Fetching: Uses async/await with fetch to retrieve
          image data from the Unsplash API without blocking the main thread.
          Dynamic Content Generation: Creates HTML elements (image wrappers,
          images, links) dynamically based on the API response. Reduces initial
          page load time and improves performance. User-Friendly Interface:
          Simple and intuitive search form. Clear display of search results.
          "Show More" button for easy pagination. API Integration: Seamless
          integration with the Unsplash API to retrieve relevant image data.
          Error Handling: Graceful handling of potential errors during API
          requests, providing a better user experience. Pagination: Efficiently
          loads images, and prevents the user from being overwhelmed with too
          many images at once. Accessibility: Uses alt attributes on images for
          screen readers and accessibility. Use of API keys: Proper use of the
          unsplash API key.
        </p>{" "}
        <br />
      </div>
      <GithubLink link1={"i"} />
    </div>
  );
}

export default ImageSearch;
