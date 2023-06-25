import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents, uploadMarks } from '../redux/action/facultyAction'
import FecultyHomeHelper from './FecultyHomeHelper'
import { toast } from 'react-toastify';
const FecultyUploadMarks = () => {
    const store = useSelector((store) => store)

    const dispatch = useDispatch() 
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [marks, setMarks] = useState([])
    const [section, setSection] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [totalMarks, setTotalMarks] = useState()
    const [exam ,setExam] = useState("")
    const [error, setError] = useState({})
    const [errorHelper, setErrorHelper] = useState({})

   


    const handleInputChange = (value, _id) => {
    
        const newMarks = [...marks]
        let index = newMarks.findIndex(m => m._id === _id)
        if (index === -1) {
            newMarks.push({ _id, value })
        }
        else {
           newMarks[index].value = value
        }
        setMarks(newMarks)
    }

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorHelper(store.errorHelper)
        }
    }, [store.errorHelper])

    const formHandler = (e) => {
        e.preventDefault()
    
       dispatch(fetchStudents(department, year,  section))
       console.log(section)
    }



    const secondFormHandler = (e) => {
        e.preventDefault()
        dispatch(uploadMarks(subjectCode, exam, totalMarks, marks, department, section
        ))
    }

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
                  Upload Marks
                </a>
              </li>
            </ul>
          </div>
       <div class="flex justify-center mt-14">
            <form noValidate onSubmit={formHandler}>
            <div class="mb-3 xl:w-96 mx-10 space-y-10 ">
              <div>
              <div>
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
                <option value={'DEFAULT'} disabled>Select</option>

                
                <option value={store.faculty.faculty.faculty.department}>{store.faculty.faculty.faculty.department}</option>
                
                
              </select>
              {error.department && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.department}</div>)}
</div>
              </div>

              <div>
                <div>
              <select defaultValue={'DEFAULT'}
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
                aria-label=".form-select-sm example"
              >
                <option value={'DEFAULT'} disabled>Select Year</option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
                
              </select>
              {error.year && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.year}</div>)}
</div>
              </div>

              <div>
                <div>
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
                <option value={'DEFAULT'} disabled>Select Section</option>

                <option value="A">A</option>
                
                
                
              </select>
              {error.section && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.section}</div>)}
</div>
              </div>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 rounded-lg w-20 h-10 ml-10 mt-6 text-white">Search</button>
            </form>
        </div>

        </div>
         <form onSubmit={secondFormHandler} className='h-screen w-screen'>
          <div className='grid place-items-center h-1/2 '>
         <div class="mb-3 xl:w-96 mx-10 space-y-6 h-1/2 ">
          <div>
            <select defaultValue={'DEFAULT'}
              onChange={(e) => setSubjectCode(e.target.value)}
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
                <option value={'DEFAULT'} disabled>Choose Subject Code</option>

                
                {
                                        store.faculty.allSubjectCodeList.map(subjectCodeName =>
                                            <option>{subjectCodeName}</option>
                                        )
                                    }
                
                
              </select>
              {errorHelper.subjectCode && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{errorHelper.subjectCode}</div>)}
</div>
              <div>
              <select defaultValue={'DEFAULT'}
              onChange={(e) => setExam(e.target.value)}
              value={exam}
                class="form-select form-select-lg 
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
                <option value={'DEFAULT'} selected disabled>Choose Exam Type</option>

                <option value="MidTermTest1">MidTerm Test 1</option>
                <option value="MidTermTest2">MidTerm Test 2</option>
                <option value="MidTermTest3">Midterm Test 3</option>
                
                
              </select>
              {errorHelper.exam && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
{errorHelper.exam}</div>)}
</div>

              <div>
                <input
                placeholder='Enter Maximum Marks'
                className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="number" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)}/>
                {errorHelper.totalMarks && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{errorHelper.totalMarks}</div>)}
              </div>
              
              </div>
              <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 rounded-lg w-20 h-10 text-white">Submit</button>
              </div>
<div class="overflow-x-auto relative overflow-scroll h-1/2">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                Registration Number
                </th>
                <th scope="col" class="py-3 px-6">
                Student Name
                </th>
                <th scope="col" class="py-3 px-6">
                Marks
                </th>
            </tr>
        </thead>
        <tbody>
                {
                                        store.faculty.fetchedStudents.map((obj, index) =>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                <td class="py-4 px-6">{obj.registrationNumber}</td>
                                                <td class="py-4 px-6">{obj.name}</td>
                                                <td class="py-4 px-6"><div className="form-check">
                                                    <input className='p-1 border border-1 focus:border-blue-600 appearance-none' placeholder='enter marks' required type="text" value={obj.marks} onChange={(e) => handleInputChange(e.target.value, obj._id)} id="defaultCheck1" />
                                                </div></td>
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

export default FecultyUploadMarks