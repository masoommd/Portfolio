import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Logo} from '../index'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  return (
    <header className='py-3  bg-gradient-to-r from-gray-500 via-gray-700  px-4  to-gray-900 mb-4 rounded-md text-red-700 shadow-[0_8px_16px_rgba(0,9,0,0.8)]'>
      <Container>
        <nav className='flex items-center justify-between relative'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={()=>  setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>



          <ul className={`flex flex-col sm:flex-row ml-auto lg:flex-row text-lg lg:space-x-8 gap-8 lg:mt-0 ${isMenuOpen ? "flex absolute top-12 right-12 bg-[#131516] border border-gray-500 rounded-md z-50" : "hidden"
            } sm:flex`}>
              <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='/about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='/education'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Education
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='/projects'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>


                            <li>
                                <NavLink
                                to='/github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/skills'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-100"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header