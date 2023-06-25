import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminGetAllFaculty } from "../redux/action/adminAction";
import Database from "./Database";
import { toast } from 'react-toastify';
import DirectorHelper from "./DirectorHelper";

const GetAllStudent = () => {
  const navigate = useNavigate()
  const store = useSelector((store) => store)
  const dispatch = useDispatch()
  const [department, setDepartment] = useState('')
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  const formHandler = (e) => {
      e.preventDefault()
      setIsLoading(true)
      dispatch(adminGetAllFaculty({ department}))
  }

  useEffect(() => {
      if (store.admin.allFaculty.length !== 0) {
          setIsLoading(false)
      }
      
  }, [store.admin.allFaculty.length])

  return (
    <div className="md:flex">
      <div className="flex border border-1">
        <DirectorHelper />
        {store.admin.isAuthenticated && <>
        <div className="border border-1 h-96 w-full mt-36 md:mt-0">
         <Database/>
          
          <div class="flex justify-center mt-14">
            <form noValidate onSubmit={formHandler} >
            <div class="mb-3 xl:w-96 flex  mx-10 space-y-10 ">
              

              <select defaultValue={'DEFAULT'}
              onChange={(e) => setDepartment(e.target.value)}
                class="form-select form-select-lg mb-3
                appearance-none
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value={'DEFAULT'} disabled>Select Faculty</option>

                <option value="B.C.A">B.C.A</option>
                <option value="M.C.A">M.C.A</option>
               
                
              </select>
              {error.department && (<div className="invalid-feedback">{error.department}</div>)}
            </div>
            <button className="bg-indigo-400 rounded-lg w-20 h-10 ml-10 mt-6">Search</button>
            </form>
          </div>
        </div>
        </>}
      </div>
      {
        store.admin.allFaculty.length !== 0 && 
        <div class="overflow-scroll scrollbar-hide w-[660px] relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                        S.No
                        </th>
                        <th scope="col" class="py-3 px-6">
                        Registration Number
                        </th>
                        <th scope="col" class="py-3 px-6">
                        Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                        Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                        Joining Year
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {store.admin.allFaculty.map((res, index) =>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                        </th>
                        <td class="py-4 px-6">
                        {res.registrationNumber}
                        </td>
                        <td class="py-4 px-6">
                        {res.name}
                        </td>
                        <td class="py-4 px-6">
                        {res.email}
                        </td>
                        <td class="py-4 px-6">
                        {res.joiningYear}
                        </td>
                    </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        
      }
    </div>
  );
};

export default GetAllStudent;
