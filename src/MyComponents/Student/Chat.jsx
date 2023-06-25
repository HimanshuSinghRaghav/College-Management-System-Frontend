import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import {newerChats, previousChats} from '../redux/action/studentAction'
import axios from 'axios'
import { getStudentByRegName } from '../redux/action/studentAction'
import {Link } from 'react-router-dom'
import StudentHomeHelper from './StudentHomeHelper'
import  Chatboard  from './Chatboard'
import { toast } from 'react-toastify';
const Chat = () => {
    const store = useSelector((store) => store)
    
    const [name, setName] = useState('')
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    const [result, setResult] = useState([])
    const [chat , setChat] = useState(false)
    const filterStudentHelper = async () => {
        try {
            const { data } = await axios({
                method: 'Post',
                url: 'http://localhost:5000/api/student/getAllStudents',
                data: {
                    department,
                    year,
                    section
                }
            })
            setResult(data.result)
        }
        catch (err) {
            console.log("Error in student register action", err.message)
        }
    }

    const filterByNameHelper = async () => {
        try {
            const { data } = await axios({
                method: 'Post',
                url: 'http://localhost:5000/api/student/getStudentByName',
                data: {
                    name
                }
            })
            setResult(data.result)
        }
        catch (err) {
            console.log("Error in student register action", err)
        }
    }
    

    const formHandler = (e) => {
        e.preventDefault()
        if (name) {
            filterByNameHelper()
        }
        else {
            filterStudentHelper()
        }
    }
   
    
    const dispatch = useDispatch()

    // const [registrationNumber, setRegistrationNumber] = useState("")  
    const student = (registrationNumber) => {
        // setRegistrationNumber(result.registrationNumber)
        dispatch(getStudentByRegName(registrationNumber))
        setChat(!chat)
        console.log(result);
    } 
  
  
  return (
    <div className='flex'>
        <StudentHomeHelper/>
        {result.length === 0 &&  <div class="flex justify-center mt-14">
            <form noValidate onSubmit={formHandler}>
            <div class="mb-3 xl:w-96 mx-10 space-y-10 ">
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

                
                <option value="B.C.A">B.C.A</option>
                
                
              </select>
              
              </div>

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
                <option value={'DEFAULT'} disabled>Select</option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                
                
              </select>
              
              </div>

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
                <option value={'DEFAULT'} disabled>Select</option>

                <option value="A">A</option>
                
                
                
              </select>
              
              </div>
              </div>
              <button type="submit">Search</button>
            </form>

            
        </div>}

        <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
    
        <div class="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        
        {result.map((obj, index) =><>
          <div
          class="flex flex-row py-4 px-2 justify-center items-center border-b-2"
        >
          <div class="w-1/4">
            <img
              src={obj.avatar}
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">{obj.name}</div>
            <span class="text-gray-500">{obj.registrationNumber}</span>
          </div>
          <button onClick={()=>student(obj.registrationNumber)}>Chat</button>
          <button><Link to={`/chat/${obj.registrationNumber}.${store.student.student.student.registrationNumber}`}>Explore</Link></button>
        </div>
        </>)}
        
              
        
      </div>


        


        {/* //students */}
        {/* {result.length !== 0 && <div className="row">
                        <div className="col-md-6 m-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Registration Number</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Chat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((obj, index) =>
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{obj.registrationNumber}</td>
                                            <td>{obj.name}</td>
                                            <td><Link to={`/studentHome/${obj.registrationNumber}`}>Explore</Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>


                    </div>} */}
{/* 
              {chat && <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.regNumStudent.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.regNumStudent.name}</h5>
                                            <h5 className="card-title">{}</h5>
                                            <Link to={`/chat/${store.student.regNumStudent.registrationNumber}.${store.student.student.student.registrationNumber}`}>CHAT</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.student.regNumStudent.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.regNumStudent.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.regNumStudent.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.regNumStudent.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.student.regNumStudent.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{store.student.regNumStudent.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{store.student.regNumStudent.batch}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>} */}


{/* <Chatboard/> */}
    </div>
  )
}

export default Chat