import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import StudentHomeHelper from './StudentHomeHelper'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
const Assignments = () => {
    const [questionsList , setQuestionsList] = useState([]);
    const store = useSelector((store) => store)

    useEffect(()=>{
        axios.post("http://localhost:5000/api/student/assignments" , {year:store.student.student.student.year}).then((res)=>{
            setQuestionsList(res.data.questionPapers)
        })
    },[])



  return (
    <div className="flex">
    <StudentHomeHelper />
    <div className="w-full">
      <p></p>
      {/* code hear */}
      <div className="overflow-scroll h-screen w-full md:grid-cols-2">
  {questionsList.map((questionPaper, index) => (
    <div key={index} className="  m-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="font-bold text-lg">{questionPaper.name}</div>
      <div className="text-gray-600">Subject Code: {questionPaper.subjectCode}</div>
      <div className="text-gray-600">Department: {questionPaper.department}</div>
      <div className="text-gray-800 mt-4">Question: {questionPaper.question}</div>
    </div>
  ))}
</div>

    </div>
  </div>
  )
}

export default Assignments
