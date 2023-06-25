import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../redux/action/studentAction'
import StudentHomeHelper from './StudentHomeHelper'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const StudentSubjectList = () => {
    const store = useSelector((store) => store)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let a
    useEffect(() => {
       dispatch(getAllSubjects())
    },[])
    console.log()
  return (
    <div className='flex'>
     <StudentHomeHelper/>
     <div className=" w-screen">
      <p className='text-4xl text-center text-gray-600 font-serif p-2'>Your Subjects</p>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-x-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                S.No
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Name
                </th>
                <th scope="col" className="py-3 px-6">
                Year
                </th>
                <th scope="col" className="py-3 px-6">
                Total Lectures
                </th>
            </tr>
        </thead>
        <tbody>
            {
              store.student.allSubjects.map((res, index) =>
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                <td className="py-4 px-6">
                {res.subjectCode}
                </td>
                <td className="py-4 px-6">
                {res.subjectName}
                </td>
                <td className="py-4 px-6">
                {res.year}
                </td>
                <td className="py-4 px-6">
                {res.totalLectures}
                </td>
                
            </tr>
              )
            }
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default StudentSubjectList
