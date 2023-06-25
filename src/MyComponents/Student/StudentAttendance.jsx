import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAttendence} from '../redux/action/studentAction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import StudentHomeHelper from './StudentHomeHelper'
import { toast } from 'react-toastify';
const StudentAttendance = () => {
  const store = useSelector(store => store)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAttendence())  
  },[])
  return (
    <div className='flex'>
        <StudentHomeHelper/>
        
<div class="overflow-x-auto relative ">
  <p className='text-4xl text-center text-gray-600 font-serif'>Your Attendence</p>
    <table class="w-screen border-x-4 p-2 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                S.No
                </th>
                <th scope="col" class="py-3 px-6">
                Subject Code
                </th>
                <th scope="col" class="py-3 px-6">
                Subject Name
                </th>
                <th scope="col" class="py-3 px-6">
                Maximum Hours
                </th>
                <th scope="col" class="py-3 px-6">
                Present Hours
                </th>
                <th scope="col" class="py-3 px-6">
                Absent Hours
                </th>
                <th scope="col" class="py-3 px-6">
                Total Hours
                </th>
                <th scope="col" class="py-3 px-6">
                Attendence
                </th>
            </tr>
        </thead>
        <tbody>
            {
              store.student.attendence.map((res, index) =>
              <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                <td class="py-4 px-6">
                {res.subjectCode}
                </td>
                <td class="py-4 px-6">
                {res.subjectName}
                </td>
                <td class="py-4 px-6">
                {res.maxHours}
                </td>
                <td class="py-4 px-6">
                {res.lectureAttended}
                </td>
                <td class="py-4 px-6">
                {res.absentHours}
                </td>
                <td class="py-4 px-6">
                {res.totalLecturesByFaculty}
                </td>
                <td class="py-4 px-6">
                {res.attendence}%
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

export default StudentAttendance