import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminGetAllSubject } from '../redux/action/adminAction'
import { toast } from 'react-toastify';


const AdminGetAllSubjects = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllSubject({ department, year }))

    }
    useEffect(() => {
        if (store.admin.allSubject.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allSubject.length])
    return (
        <div>
            <div>
                 <>
                    
                    <div className="container">
                        <div className="row h-screen w-[690px] divide-y-2">
                            <div className="col-md-4 h-1/2">
                            <div className="">
            <ul className=" text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              <li className="w-full">
                <a
                 onClick={()=>navigate('')}
                  className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                  aria-current="page"
                >
                   Available Subjects
                </a>
              </li>

              
            </ul>
          </div>
                                <form className='p-4' noValidate onSubmit={formHandler}>
                                    <div className="form-group">
                                        <label htmlFor="departmentId">Department</label>
                                        <select className="form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(e) => setDepartment(e.target.value)}  id="departmentId">
                                            <option selected disabled>Select Department</option>
                                            <option value="B.C.A">B.C.A</option>
                                            <option value="M.C.A">M.C.A</option>
                                            
                                        </select>
                                        {error.department && (<div className="invalid-feedback">{error.department}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yearId">Year</label>
                                        <select className="form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(e) => setYear(e.target.value)} id="yearId">
                                            <option security='selected disabled'>Select Year</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            
                                        </select>
                                        {error.year && (<div className="invalid-feedback">{error.year}</div>)}
                                    </div>
                                    <div class="row justify-content-center">
                                        
                                    </div>
                                    <button type="submit" className="bg-indigo-400 text-white rounded-lg w-20 h-10 ml-10 mt-6  ">Search</button>
                                   
                                </form>


                            </div>
                            <div className="col-md-8 overflow-scroll h-1/2 scrollbar-hide">

                                {store.admin.allSubject.length !== 0 && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                        <th scope="col" className='py-3 px-6'>S.No</th>
                                            <th scope="col" className='py-3 px-6'>Subject Code</th>
                                            <th scope="col" className='py-3 px-6'>Subject Name</th>
                                            <th scope="col" className='py-3 px-6'>Total Lectures</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store.admin.allSubject.map((res, index) =>
                                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700"' key={index}>
                                                    <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{index + 1}</th>
                                                    <td className='py-4 px-6'>{res.subjectCode}</td>
                                                    <td className='py-4 px-6'>{res.subjectName}</td>
                                                    <td className='py-4 px-6'>{res.totalLectures}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>}

                            </div>
                        </div>
                    </div>
                </> 
            </div>
            
        </div>
    )
}

export default AdminGetAllSubjects
