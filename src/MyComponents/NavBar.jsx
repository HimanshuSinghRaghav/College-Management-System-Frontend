import React, {useState} from 'react'
import uasGlobalContext from '../Context'
import JnvuLogo from '../assets/JnvuLogo.png'
import { useNavigate } from "react-router-dom"

export const NavBar = () => {

  const {Menu  , open } = uasGlobalContext()
  const [navbar, setNavbar] = useState(false);
  const negetive = useNavigate()

  
  return (
    <>
    <nav className='fixed z-30 top-0 sm:flex w-full justify-between shadow-neutral-900 shadow-sm bg-white' id='mynav'>
      <div className='flex justify-between'>
      <img src={JnvuLogo} alt="done" className=' rounded-full w-16 h-16 mt-2 ml-4 ' />
      <button
                                className="md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
    </div>
    
    
  <div className={`sm:flex sm:space-x-7 sm:mt-5 sm:mr-10 ${
                            navbar ? "block" : "hidden"
                        }`} >
   
   <ul className='cursor-pointer mt-5 ml-5  sm:mt-0  md:hover:border-2 hover:bg-white hover:md:bg-white md:hover:border-white hover:underline md:rounded-md h-8 md:w-20 md:text-center'>
      <botton onClick={()=>negetive('/')} >  <li >Home</li></botton>
      </ul>
    <ul className='cursor-pointer mt-5 ml-5  sm:mt-0  md:hover:border-2 hover:bg-white hover:md:bg-white md:hover:border-white hover:underline md:rounded-md h-8 md:w-20 md:text-center'>
      <botton onClick={()=>negetive('/aboutUs')} >  <li >About Us</li></botton>
      </ul><hr/>

 
      </div>    
      
    </nav>
    </>
  )
}
