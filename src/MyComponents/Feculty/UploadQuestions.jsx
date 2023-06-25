import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UploadQuestions = () => {
    const [name, setName] = useState("");
    const [question, setQuestion] = useState({});
    const [questionList, setQuestionList] = useState([]);
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        setQuestion({ ...question, [name]: value });
    };

    const handleOptionChange = (e, index) => {
        switch (index) {
            case 1:
                setOption1(e.target.value);
                break;
            case 2:
                setOption2(e.target.value);
                break;
            case 3:
                setOption3(e.target.value);
                break;
            case 4:
                setOption4(e.target.value);
                break;
            default:
                break;
        }
    };

    const addQuestion = async () => {
        console.log(question)
        try {
            setQuestion({
                ...question,
                options: [option1, option2, option3, option4]
            });
            // Save the question to the database
            const { data } = await axios.post('http://localhost:5000/api/faculty/question', question);
            setQuestionList([...questionList, data]);
            console.log(questionList)
            // Reset the question and options
            setQuestion({});
            setOption1("");
            setOption2("");
            setOption3("");
            setOption4("");
        } catch (err) {
            console.log("Error adding question", err.message);
        }
                };
            
                const handleSubmit = () => {
                    if (name !== "" && questionList.length === 10) {
                        axios
                            .post("http://localhost:5000/api/faculty/uploadQuestionsPaper", {
                                name: name,
                                questions: questionList,
                            })
                            .then((response) => {
                                console.log(response.data);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                };
            
                return (<div className='flex'>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange} />
                        <br />
                        <label>Question:</label>
                        <input type="text" name="question" value={question.question} onChange={handleQuestionChange} />
                        <br />
                        <label>Option 1:</label>
                        <input type="text" value={option1} onChange={(e) => handleOptionChange(e, 1)} />
                        <br />
                        <label>Option 2:</label>
                        <input type="text" value={option2} onChange={(e) => handleOptionChange(e, 2)} />
                        <br />
                        <label>Option 3:</label>
                        <input type="text" value={option3} onChange={(e) => handleOptionChange(e, 3)} />
                        <br />
                        <label>Option 4:</label>
                        <input type="text" value={option4} onChange={(e) => handleOptionChange(e, 4)} />
            <br />
            <label>Subject Code:</label>
            <input type="text" name="subjectCode" value={question.subjectCode} onChange={handleQuestionChange} />
            <br />
            <label>Department:</label>
            <input type="text" name="department" value={question.department} onChange={handleQuestionChange} />
            <br />
            <button onClick={addQuestion} disabled={questionList.length === 10}>
                Add Question
            </button>
            <br />
            <button onClick={handleSubmit} disabled={questionList.length !== 10}>
                Submit
            </button>
        </div>
        <div>
            
<form className="flex w-full max-w-sm space-x-3 shadow-lg justify-center items-center">
    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
             Assignment
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                    <input type="text" value={name} onChange={handleNameChange} id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" name="subjectCode" value={question.subjectCode} onChange={handleQuestionChange} id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Subject Code"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 w-80">
                <div className=" relative ">
                    <input type="text" name="department" value={question.department} onChange={handleQuestionChange} id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" for="name">
                            <textarea  name="question" value={question.question} onChange={handleQuestionChange} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your question"  rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 lg:col-span-1 justify-between w-80 gap-2 grid grid-cols-2">
                <div className=" relative ">
                    <input type="text" id="contact-form-name" value={option1} onChange={(e) => handleOptionChange(e, 1)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 1"/>
                    </div>
                    <div className=" relative ">
                        <input type="text" id="contact-form-email" value={option2} onChange={(e) => handleOptionChange(e, 2)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 2"/>
                        </div>
                        <div className=" relative ">
                        <input type="text" id="contact-form-email" value={option3} onChange={(e) => handleOptionChange(e, 3)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 3"/>
                        </div>
                        <div className=" relative ">
                        <input type="text" id="contact-form-email" value={option4} onChange={(e) => handleOptionChange(e, 4)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 4"/>
                        </div>
                </div>
                <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Add Question
                        </button>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>

        </div>
        </div>
    );
};

export default UploadQuestions;

