import StudentHomeHelper from './StudentHomeHelper'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../redux/action/studentAction'
import { toast } from 'react-toastify';

const StudentTestPerformance = () => {

  const store = useSelector(store => store)
  
  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMarks())
    }, []) 

    console.log(store.student.allMarks.MidTermTest3)

  return (
    <div className='flex'>
        <StudentHomeHelper/>
        <div>
        
        <div className="">
           
        {store.student.allMarks.MidTermTest1  && <>
            <p className='text-4xl text-gray-600 text-center font-serif p-2 bg-gray-400 bg-opacity-25'>Your MidTermTest 1 Marks</p>
    <table className=" text-sm text-left text-gray-500 dark:text-gray-400 w-screen">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                S.No.
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Name
                </th>
                <th scope="col" className="py-3 px-6">
                Obtained Marks
                </th>
                <th scope="col" className="py-3 px-6">
                Total Marks 
                </th>
                <th scope="col" className="py-3 px-6">
                Percentage
                </th>
            </tr>
        </thead>
        <tbody>
                {
                                        store.student.allMarks.MidTermTest1.map((res, index) =>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                <td className="py-4 px-6">{index + 1}</td>
                                                <td className="py-4 px-6">{res.subject.subjectCode}</td>
                                                <td className="py-4 px-6">{res.subject.subjectName}</td>
                                                <td className="py-4 px-6">{res.marks}</td>
                                                <td className="py-4 px-6">{res.totalMarks}</td>
                                                <td className="py-4 px-6">{(res.marks / res.totalMarks) * 100}%</td>
                                            </tr>
                                        )
                                    }          
        </tbody>
    </table>
    </>}
  </div>



{store.student.allMarks.MidTermTest2 &&
        <div className="w-screen">
        {store.student.allMarks.MidTermTest2.length !== 0 ? <>
        <p className='text-4xl text-gray-600 text-center font-serif p-2 bg-gray-400 bg-opacity-25'>Your MidTermTest 2 Marks</p>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-x-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                S.No.
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Name
                </th>
                <th scope="col" className="py-3 px-6">
                Obtained Marks
                </th>
                <th scope="col" className="py-3 px-6">
                Total Marks
                </th>
                <th scope="col" className="py-3 px-6">
                Percentage
                </th>
            </tr>
        </thead>
        <tbody>
                {
                                        store.student.allMarks.MidTermTest2.map((res, index) =>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                <td className="py-4 px-6">{index + 1}</td>
                                                <td className="py-4 px-6">{res.subject.subjectCode}</td>
                                                <td className="py-4 px-6">{res.subject.subjectName}</td>
                                                <td className="py-4 px-6">{res.marks}</td>
                                                <td className="py-4 px-6">{res.totalMarks}</td>
                                                <td className="py-4 px-6">{(res.marks / res.totalMarks) * 100}%</td>
                                            </tr>
                                        )
                                    }          
        </tbody>
    </table>
    </>:<>no data</>}
  </div>
  

}


{store.student.allMarks.MidTermTest3 && 
        <div className="w-full">
        {store.student.allMarks.MidTermTest3.length !== 0 ? <>
            <p className='text-4xl text-gray-600 text-center font-serif p-2 bg-gray-400 bg-opacity-25'>Your MidTermTest 3 Marks</p>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                S.No.
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                Subject Name
                </th>
                <th scope="col" className="py-3 px-6">
                Obtained Marks
                </th>
                <th scope="col" className="py-3 px-6">
                Total Marks
                </th>
                <th scope="col" className="py-3 px-6">
                Percentage
                </th>
            </tr>
        </thead>
        <tbody>
                {
                                        store.student.allMarks.MidTermTest3.map((res, index) =>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                <td className="py-4 px-6">{index + 1}</td>
                                                <td className="py-4 px-6">{res.subject.subjectCode}</td>
                                                <td className="py-4 px-6">{res.subject.subjectName}</td>
                                                <td className="py-4 px-6">{res.marks}</td>
                                                <td className="py-4 px-6">{res.totalMarks}</td>
                                                <td className="py-4 px-6">{(res.marks / res.totalMarks) * 100}%</td>
                                            </tr>
                                        )
                                    }          
        </tbody>
    </table>
    </>:<>no data</>}
  </div>
 

}
</div>
    </div>
  )
}

export default StudentTestPerformance