import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import {fetchStudents,markAttendence } from '../redux/action/facultyAction'
import { useNavigate } from 'react-router-dom'
import FecultyHomeHelper from './FecultyHomeHelper'

const MarkAttendance = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [checkedValue, setCheckedValue] = useState([])
    const [error, setError] = useState({})
    const [flag, setFlag] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)

    const handleInputChange = (e) => {
        const tempCheck = checkedValue
        let index
        if (e.target.checked)
        {
            tempCheck.push(e.target.value)
        }
        else {
            index = tempCheck.indexOf(e.target.value)
            tempCheck.splice(index,1)
        }
        setCheckedValue(tempCheck)
    }
    
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(fetchStudents(department, year, section))
       
    }

    useEffect(() => {
        if (store.error || !store.faculty.fetchedStudentsHelper) {
            setIsLoading(false)
        }
        
    }, [store.error, store.faculty.fetchedStudentsHelper])

 
    const secondFormHandler = (e) => {
        e.preventDefault()
        setIsLoading2(true)
        dispatch(markAttendence(checkedValue, subjectCode, department, year, section))
        setCheckedValue([])
        
    }

    useEffect(() => {
        if (store.faculty.fetchedStudentsHelper) {
            setIsLoading2(false)
        }
        
    },[store.faculty.fetchedStudentsHelper])

  return (
    <div className='flex'>
        <FecultyHomeHelper/>
        
        <div className="border border-1 h-full">
          <div className="">
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              

              <li className="w-full">
                <a
                  
                  className="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Faculty Data
                </a>
              </li>
            </ul>
          </div>
          
          <div class="flex justify-center mt-14">
            <form noValidate onSubmit={formHandler}>
            <div class="mb-3 xl:w-96 mx-10 space-y-10 ">
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
                <option selected>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
              </select>
              {error.year && (<div className="invalid-feedback">{error.year}</div>)}
              
            
              <select defaultValue={'DEFAULT'}
              onChange={(e) => setSection(e.target.value)}
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

                <option value="A">A</option>
                
                
                
              </select>
              {error.department && (<div className="invalid-feedback">{error.department}</div>)}
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 rounded-lg w-20 h-10 ml-10 mt-6 text-white">Search</button>
            </form>
          </div>
        </div>


        
        <form onSubmit={secondFormHandler} className="overflow-scroll h-screen w-screen">

<div className='flex rounded-xl'>
<select
required onChange={(e) => setSubjectCode(e.target.value)}
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
  <option selected>Subject Code</option>
  {
                                        store.faculty.allSubjectCodeList.map(subjectCodeName =>
                                            <option>{subjectCodeName}</option>
                                        )
                                    }
  
</select>
<button type="submit" className="bg-indigo-600 hover:bg-indigo-700 rounded-r-lg w-24 h-12 text-white">Submit</button>
</div>
{error.year && (<div className="invalid-feedback">{error.year}</div>)}

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                Registration Number
                </th>
                <th scope="col" class="py-3 px-6">
                Student Name
                </th>
                
                
            </tr>
        </thead>
        <tbody>
        {
                                        store.faculty.fetchedStudents.map((obj, index) =>
                                            <tr>
                                                <td><div className="py-3 px-6">
                                                <input value={obj._id} onChange={handleInputChange} id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                </div></td>
                                                <td className='py-4 px-6' key={index}>{obj.registrationNumber}</td>
                                                <td className='py-4 px-6'>{obj.name}</td>
                                            </tr>
                                        )
                                    }
        </tbody>
    </table>
</div>

</form>

    </div>
  )
}

export default MarkAttendance