import React, { useState } from 'react';
import axios from 'axios';
import FecultyHomeHelper from './FecultyHomeHelper';
import { toast } from 'react-toastify';
const UploadAssignments = () => {
    const [name, setName] = useState("");
    const [department , setDepartment] = useState("")
    const [subjectCode , setSubjectCode] = useState("")
    const [question, setQuestion] = useState('');
    const [year, setYear] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDepartmentChange = (e)=>{
        setDepartment(e.target.value)
    }

    const handleSubjectCodeChange = (e)=>{
        setSubjectCode(e.target.value)
    }

    const handleYearChange = (e)=>{
        setYear(e.target.value)
    }

    const handleQuestionChange = (e) => {
        
        setQuestion(e.target.value);
    };
                const handleSubmit = () => {
                   
                        axios
                            .post("http://localhost:5000/api/faculty/uploadQuestionsPaper", {
                                name: name,
                                subjectCode:subjectCode,
                                department:department,
                                questions: question,
                                year: year
                            })
                            .then((response) => {
                                // alert("Assignment Upload Sucessfully")
                                toast.success("Assignment Upload Sucessfully");
                                console.log(response.data);
                            })
                            .catch((error) => {
                                console.log(error);
                                toast.error("NetWork Error");
                            });
                    
                };


              
  return (
    <div>
      <div className='flex'>
                    <FecultyHomeHelper/>
                    
                     <div className=' w-screen grid place-items-center '>

            
<div className="flex w-full  max-w-sm space-x-3 shadow-lg">

    <div className="w-full max-w-2xl px-5 py-10  bg-white rounded-lg shadow dark:bg-gray-800">
  
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
             Assignment
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className="">
                    <input type="text" value={name} onChange={handleNameChange} id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className="  ">
                        <input type="text" name="subjectCode" value={subjectCode} onChange={handleSubjectCodeChange} id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Subject Code"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                    <div className="  ">
                        <input type="text" name="year" value={year} onChange={handleYearChange} id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Year"/>
                        </div>        
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                <div className="  ">
                <input type="text" name="department" value={department} onChange={handleDepartmentChange} id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Departmant Name"/>
                    </div>
                </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                            <textarea  name="question" value={question.question} onChange={handleQuestionChange} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your question"  rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                  
                
                    <div className="col-span-2 text-right">
                        <button onClick={handleSubmit}  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default UploadAssignments
