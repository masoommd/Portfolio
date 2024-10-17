import React from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import GithubLink from '../components/GithubLink'

function WeatherApp() {
    let details = ["/weather1.png", "/weather2.png", "/weather3.jpg"]
    return (
        <div className='border flex flex-wrap'>
            <div className='text-white text-3xl font-mono bg-blue-700 mt-8 ml-8 p-2 rounded-xl px-4 font-semibold border-4 border-sky-400 border-double'>WEATHER APP</div>
            <ProjectsDetails details={details}  />
            <div className='bg-transparent w-full h-full text-2xl text-justify p-8 border m-8 font-mono text-gray-300 '>
                <p>This is a weather app that shows the current weather of a particular city. The app uses the OpenWeatherMap API to fetch the weather data. The app is built using React, CSS and Material UI. </p> <br />
                <b><u>Overall Functionality</u></b> <br /> <br />
                <p>This code creates a simple weather application using React and Material UI. It allows users to search for weather information in a specific city and displays relevan <br />t details.</p> <br />

                <b><u>Breakdown of Code Files:</u></b> <br />

                <p>
                <b><u>App.jsx:</u></b> <br />
                Imports the WeatherApp component.
                Renders the "WeatherApp" component.
                index.css:
                Defines global styles for the entire application, including font family, line height, background image, and color scheme.
                Sets body styles for centering content, setting minimum width and height.
                </p> <br />

                <p>
                <b><u>InfoBox.jsx:</u></b> <br />
                Imports necessary Material UI components Card, CardMedia, CardContent, Typography, AcUnitIcon, WbSunnyIcon, WaterDropIcon).
                Takes weather data info as a prop.
                Displays the city name, weather icon based on temperature/humidity, and weather information within a Material UI Card component.
                Uses conditional logic to choose the appropriate weather icon based on humidity and temperature.
                </p> <br />
                <p>
                <b><u>SearchBox.jsx:</u></b> <br />
                Imports Material UI components TextField, Button.
                Uses React's useState hook to manage the city input state and error state.
                Defines API URL and API key stored securely using import.meta.env.VITE_API_KEY.
                Implements the getWeather function to fetch weather data from the OpenWeatherMap API.
                Handles user input for the city name and submits the search using a form.
                Updates the weather information using the updateInfo prop when successful.
                Displays an error message if the city is not found in the API.
                </p> <br />

                <p>
                <b><u>WeatherApp.jsx:</u></b> <br />
                Imports useState hook and InfoBox, SearchBox components.
                Uses useState hook to manage the weather information state.
                Defines the updateInfo function to update the weather information.
                Renders the application's title with Material UI styling, a SearchBox component to search for a city, and an InfoBox component to display the fetched weather data.
                Material UI Integration:

                Material UI components are used throughout the application to create a visually appealing and interactive user interface.
                These components provide pre-built styles and functionality for elements like cards, text fields, buttons, and icons.
                Explanation of Specific Lines:
                </p> <br />

                <p>
                <b><u>index.css:</u></b> <br />
                background-image: url'/weather.jpg'; background-size:cover; sets a background image for the entire application.
                color-scheme: light dark; allows the browser to choose the appropriate color scheme based on user preferences.
                font-synthesis: none; text-rendering: optimizeLegibility; optimizes font rendering for improved readability.
                InfoBox.jsx:
                let INIT_URL = "..."; let COLD_URL = "..."; ... defines different image URLs for cold, hot, and rainy weather conditions.
                info.humidity is greater than 80?RAIN_URL:... uses conditional logic to set the image URL based on humidity.
                WbSunnyIcon , AcUnitIcon , WaterDropIcon  render weather icons using Material UI's icons.'
                </p> <br />
            
                <p>
                <b><u>SearchBox.jsx:</u></b> <br />
                const API_URL = "..."; const API_KEY = import.meta.env.VITE_API_KEY; defines the OpenWeatherMap API URL and your API key stored securely.

                getWeather defines an asynchronous function to fetch weather data.
                TextField - creates a Material UI text field for city input.
                Button - creates a Material UI button for form submission.
                </p> <br />

                <p>
                <b><u>WeatherApp.jsx:</u></b> <br />
                initializes the weather state using useState.
                updateInfo function updates the weather information based on new data.
                </p>
            </div>
            <GithubLink link1='w'/>

        </div>
    )
}

export default WeatherApp