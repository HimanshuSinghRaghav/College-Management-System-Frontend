import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adminAddStudent } from '../redux/action/adminAction'
import FecultyHomeHelper from './FecultyHomeHelper'
import { toast } from 'react-toastify';
const FecultyAddStudent = () => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [year, setYear] = useState('')
  const [section, setSection] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [studentMobileNumber, setContactNumber] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [fatherMobileNumber, setFatherContactNumber] = useState('')
  const [aadharCard, setAadharCard] = useState('')
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
      if (store.error) {
          setError(store.error)
      }
  }, [store.error])
  const formHandler = (e) => {
      e.preventDefault()
      setIsLoading(true)
      dispatch(adminAddStudent({
          name,
          email,
          year,
          department,
          fatherName,
          aadharCard,
          gender,
          section: section.toUpperCase(),
          dob: dob.split("-").reverse().join("-"),
          studentMobileNumber,
          fatherMobileNumber
      }))
  } 
  useEffect(() => {
      if (store.admin.adminAddStudentFlag) {
          setError({})
      }
  }, [store.admin.adminAddStudentFlag])

  useEffect(() => {
      if (store.error || store.admin.adminAddStudentFlag) {
          setIsLoading(false)
      }
  }, [store.error, store.admin.adminAddStudentFlag])

  return (
    <div className='flex w-screen h-screen'>
      <FecultyHomeHelper/>
      <div className='max-h-[500px]'>
      <p className='text-2xl text-center font-serif'>Fill Student Details</p>
         <form  noValidate onSubmit={formHandler} className='overflow-scroll scrollbar-hide max-h-[620px] max-w-[1100px]'>
         <div className="mb-3 xl:w-[1000px] m-5  mx-10  grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
          
         <div>
         <label htmlFor="nameId">Student Name</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'onChange={(e) => setName(e.target.value)} type="text"/>
                {error.name && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.name}</div>)}
          </div>

          <div className='m-0'>
              <label htmlFor="emailId">Email</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setEmail(e.target.value)} type="email"/>
                {error.email && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.email}</div>)}
          </div>

          <div>
          <label htmlFor="nameId">Department</label>
            <select defaultValue={'DEFAULT'}
              onChange={(e) => setDepartment(e.target.value)}
                className="form-select form-select-lg mb-3
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
                                                <option value="B.C.A">B.C.A</option>
                                                <option value="M.C.A">M.C.A</option>
                                                
                
                
              </select>
              {error.department && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.department}</div>)}
              </div>
              <div>
              <label htmlFor="nameId">Year</label>
              <select defaultValue={'DEFAULT'}
              onChange={(e) => setYear(e.target.value)}
              
                className="form-select form-select-lg mb-3
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

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
                
              </select>
              {error.year && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.year}</div>)}

              </div> 
              

            
              <div>
              <label htmlFor="sectionId">Section</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setSection(e.target.value)} type="text"/>
                {error.section && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.section}</div>)}
                
              </div>


              <div>
              <label htmlFor="dobId">DOB</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setDob(e.target.value)} type="date"/>
                {error.dob && (<div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.dob}</div>)}
              </div>
            

            <div>
            <label htmlFor="nameId">Gender</label>
            <select defaultValue={'DEFAULT'}
             onChange={(e) => setGender(e.target.value)}
              
                className="form-select form-select-lg mb-3
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

                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                
                
              </select>
            </div>
              <div>
              <label htmlFor="numberId">Contact Number</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setContactNumber(e.target.value)} required type="number"/>
                
              </div>

              <div>
              <label htmlFor="fatherId">Father Name</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setFatherName(e.target.value)} type="text"/>
                
              </div>

              <div>
              <label htmlFor="fathercnId">Father Contact Number</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setFatherContactNumber(e.target.value)} type="number"/>
                
              </div>

              <div>
              <label htmlFor="aadharId">Aadhar Card Number</label>
                <input className='form-select form-select-lg mb-3
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' onChange={(e) => setAadharCard(e.target.value)} type="number" />
                
              </div>


  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 rounded-lg w-20 h-10 ml-10 mt-6 text-white">Submit</button>
  </div>
  
  </form>
  </div>
  
    </div>
  )
}

export default FecultyAddStudent