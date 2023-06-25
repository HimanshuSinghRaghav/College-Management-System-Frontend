import React, { useState , useEffect } from 'react'
// import DirectorHelper from './Student/DirectorHelper'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
// import Profile from './Profile';
// import GetAllStudent from './Student/GetAllFaculty';

const Database = () => {
   const navigate = useNavigate()
   const [hover , setHover] = useState(true)
    console.log(hover)
  return (
    <div className=''>
         <div className="">
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              <li onClick={()=>{navigate('/directorHome/getAllStudent') , setHover(true)}} className="w-full">
                <a
                 
                  className={`inline-block p-4 w-full text-gray-900 ${hover ? `bg-gray-100`:`bg-white`}  rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`}
                  aria-current="page"
                >
                  Students Data
                </a>
              </li>

              <li onClick={()=>{navigate('/directorHome/getAllFaculty') , setHover(false)}} className="w-full">
                <a
                  
                  className={`inline-block p-4 w-full  rounded-r-lg ${!hover ? `bg-gray-100`:`bg-white`} hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                >
                  Faculty Data
                </a>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Database