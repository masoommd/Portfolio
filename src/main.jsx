import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Education/Education.jsx'
import Projects from './components/Projects/Projects.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import MinorProjects from './components/Projects/MinorProjects.jsx'
import MajorProjects from './components/Projects/MajorProjects.jsx'
import WeatherApp from './pages/WeatherApp.jsx'
import CurrencyConvertor from './pages/CurrencyConvertor.jsx'
import PasswordGenerator from './pages/PasswordGenerator.jsx'
import TodoApp from './pages/TodoApp.jsx'
import SimonGame from './pages/SimonGame.jsx'
import AmazonClone from './pages/AmazonClone.jsx'
import Wanderlust from './pages/Wanderlust.jsx'
import BlogApp from './pages/BlogApp.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectLayout from './ProjectLayout.jsx'
import MinorProjectLayout from './MinorProjectLayout.jsx'
import MajorProjectLayout from './MajorProjectLayout.jsx'
import Skills from './pages/Skills.jsx'
import ImageSearch from './pages/ImageSearch.jsx'
import JobPortal from './pages/JobPortal.jsx'
import Resume from './components/Resume/Resume.jsx'
import MysteryMessage from './pages/MysteryMessage.jsx'
import Fitclub from './pages/Fitclub.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>,
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          loader:githubInfoLoader,
          path:"github",
          element:<Github/>
        },{
          path:"education",
          element:<Education/>
        },
        {
          path:"resume",
          element:<Resume/>
        },
        {
          path:"projects",
          element:<ProjectLayout/>,
          children:[
            {
              path:"",
          element:<Projects/>,
            },
            {
              path:"minorprojects",
              element:<MinorProjectLayout/>,
              children:[
                {
                path:"",
                element:<MinorProjects/>,
              },
              {
                path:"weather-app",
                element:<WeatherApp/>
              },
              {
                path:"currency-convertor",
                element:<CurrencyConvertor/>
              },
              {
                path:"password-generator",
                element:<PasswordGenerator/>
              },
              {
                path:"todo-app",
                element: <TodoApp/>
              },
              {
                path:"simon-game",
                element:<SimonGame/>
              },
              {
                path:"amazon-clone",
                element:<AmazonClone/>
              },
              {
                path:"image-search",
                element:<ImageSearch/>
              },
              {
                path:"fitclub",
                element:<Fitclub/>
              },
            ]
            },
            {
              path:"majorprojects",
              element:<MajorProjectLayout/>,
              children:[
                {
                  path:"",
                  element:<MajorProjects/>
                },
                {
                  path:"wanderlust",
                  element:<Wanderlust/>
                },
                {
                  path:"blog-app",
                  element:<BlogApp/>
                },
                {
                  path:"portfolio",
                  element:<Portfolio/>
                },
                {
                  path:"job-portal",
                  element:<JobPortal/>
                },
                {
                  path:"mystery-message",
                  element:<MysteryMessage/>
                },
              ]
            },
          ]
        },
        {
          path:"/skills",
          element:<Skills/>
        },
        {
          path:"/:userId",
          element:<User/>
        },
        
      ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
