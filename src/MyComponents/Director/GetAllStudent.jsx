import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminGetAllStudent } from "../redux/action/adminAction";
import Database from "./Database";
import DirectorHelper from "./DirectorHelper";
import { toast } from 'react-toastify';
const GetAllStudent = () => {
  
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [StudentData , setStudentData] = useState(true)



  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(adminGetAllStudent({ department, year }));
    console.log(year)
  };

 console.log(store.admin.isAuthenticated)

//   useEffect(() => {
//     if (store.admin.allStudent.length !== 0) {
//       setIsLoading(false);
//       navigate("/");
//     }
//   }, [store.admin.allStudent.length]);

  return (
    <div className="md:flex">
      <div className="flex border border-1"> 
        <DirectorHelper />
        {store.admin.isAuthenticated ?<>
        <div className="border border-1 h-96 w-full mt-20 md:mt-0">
         <Database/>
          
          <div class="flex justify-center mt-14">
            <form noValidate onSubmit={formHandler}>
            <div class="mb-3 xl:w-96 mx-10 space-y-10 ">
              <select
              onChange={(e) => setYear(e.target.value)}
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
                aria-label=".form-select-lg example"
              >
                <option selected>Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
              </select>
              {error.year && (<div className="invalid-feedback">{error.year}</div>)}
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
                aria-label=".form-select-sm example"
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
        </>:<>no data</>}
      </div>
      {
        store.admin.allStudent.length !== 0 && 
        <div class="overflow-x-auto relative overflow-scroll scrollbar-hide h-[630px]">
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
                        Section
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {store.admin.allStudent.map((res, index) =>
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
                        {res.section}
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
