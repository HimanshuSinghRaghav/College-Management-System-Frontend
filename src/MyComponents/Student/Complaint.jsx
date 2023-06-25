import React from 'react'
import { useState } from 'react';
import StudentHomeHelper from './StudentHomeHelper'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import QuestionMark from '../../assets/QuestionMark.png'
import { toast } from 'react-toastify';
const Complaint = () => {
    const store = useSelector((store) => store)
    const [complaint, setComplaint] = useState({
        studentName: '',
        department:store.student.student.student.department,
        year:store.student.student.student.year,
        complaint: ''
    });
    
    const handleChange = (e) => {
        setComplaint({
            ...complaint,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/student/complaint', complaint);
            console.log(response.data);
            // alert(response.data.message)
            toast.success(response.data.message);
            // do something with the response
        } catch (error) {
            console.error(error);
           
        }
    }
  return (
    <div className='flex'>
        <div>
        <StudentHomeHelper/>
        </div>
     
<div className="grid place-items-center w-full ">
  <div>
  <p className='text-4xl text-gray-600 text-center font-serif p-2  rounded-t-lg'>Write Your Complaint</p>
          <div className=" rounded-xl shadow-2xl h-96  w-[500px] flex">
            
            <div className="w-[40%] h-full  rounded-xl  bg-indigo-500 flex flex-col justify-center items-center text-white text-2xl font-semibold">
              <img
                className="w-28 h-28"
                src={QuestionMark}
                alt="announcementt"
                srcset=""
              />
              Write Complaint     
            </div>
            <form
              className="h-full grid place-items-center p-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="title"
                >
                  Your Name
                </label>
                <input
                  className="bg-white border rounded-lg border-gray-400 p-2 w-full"
                  type="text"
                  placeholder='enter your name'
                  name="studentName" value={complaint.studentId} onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="description"
                >
                  Complaint
                </label>
                <textarea
                  className="bg-white border rounded-lg border-gray-400 p-2 w-full h-32"
                  placeholder='write your complaint'
                  name="complaint" value={complaint.complaint} onChange={handleChange} required minLength={1} maxLength={1000}
                ></textarea>
              </div>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                type="submit"
              >
                Submit Complaint
              </button>
            </form>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Complaint
