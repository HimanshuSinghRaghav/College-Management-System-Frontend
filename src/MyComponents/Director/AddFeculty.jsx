import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DirectorHelper from "./DirectorHelper";
import { adminAddFaculty } from "../redux/action/adminAction";
import { toast } from 'react-toastify';
const AddFeculty = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [facultyMobileNUmber, setFacultyMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);
  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(
      adminAddFaculty({
        name,
        email,
        designation,
        facultyMobileNUmber,
        department,
        aadharCard,
        gender,
        dob: dob.split("-").reverse().join("-"),
      })
    );
    setName(""),
    setEmail(""),
    setDesignation,("")
    setFacultyMobileNumber(""),
    setDepartment(""),
    setAadharCard(""),
    setGender(""),
    setDob("")
    
  };

  useEffect(() => {
    if (store.admin.adminAddFacultyFlag) {
      setError({});
    }
  }, [store.admin.adminAddFacultyFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddFacultyFlag) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error, store.admin.adminAddFacultyFlag]);

  return (
    <div className="flex">
      <div>
        <DirectorHelper />
      </div>
      <div className="border border-1">
      <div className="border border-1">
            <ul className=" text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              <li className="w-full">
                <a
                 onClick={()=>navigate('')}
                  className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                  aria-current="page"
                >
                   Add Faculty
                </a>
              </li>

              
            </ul>
          </div>

        <div className="grid h-[600px] w-full md:px-14 place-items-center overflow-scroll scrollbar-hide"> 
     
        <div className=" ">
          <div className="row ">
            <div className="col">
              <form
                className=""
                noValidate
                onSubmit={formHandler}
              >
                <div>
                  <div className="grid md:grid-cols-2 gap-14">
                    <div className="col-md-6 space-y-8">
                      <div className="form-group">
                        <label htmlFor="nameId">Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          id="nameId"
                          placeholder="Enter Name"
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
                        />
                        {error.name && (
                          <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>{error.name}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailId">Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="emailId"
                          placeholder="Enter Email"
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
                        />
                        {error.email && (
                          <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>{error.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="designationId">Designation</label>
                        <select
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
                          onChange={(e) => setDesignation(e.target.value)}
                          id="designationId"
                        >
                          <option selected disabled>Select Designation</option>
                          <option value="Assistant Professor">
                            Worker
                          </option>
                          <option value="Senior Professer">
                            Senior Professer
                          </option>
                        </select>
                        {error.designation && (
                          <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                            {error.designation}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="departmentId">Department</label>
                        <select
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
                          onChange={(e) => setDepartment(e.target.value)}
                          id="departmentId"
                        >
                          <option selected disabled>Select Department</option>
                          <option value="B.C.A">B.C.A</option>
                          <option value="M.C.A">M.C.A</option>
                        </select>
                        {error.department && (
                          <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                            {error.department}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-8">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="dobId">DOB</label>
                        <input
                          onChange={(e) => setDob(e.target.value)}
                          type="date"
                          placeholder="Enter DOB"
                          id="dobId"
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
                        />
                        {error.dob && (
                          <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>{error.dob}</div>
                        )}
                      </div>
                    </div>
                    
                      <div className="form-group">
                        <label htmlFor="genderId">Gender</label>
                        <select
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
                          id="genderId"
                        >
                          <option selected disabled>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="numberId">Contact Number</label>
                        <input
                          onChange={(e) =>
                            setFacultyMobileNumber(e.target.value)
                          }
                          type="number"
                          placeholder="Enter Contact Number"
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
                          id="numberId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="aadharId">Aadhar Card Number</label>
                        <input
                          onChange={(e) => setAadharCard(e.target.value)}
                          placeholder="Enter Aadhar card number"
                          type="number"
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
                          id="aadharId"
                        />
                      </div>
                      <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Add Faculty</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeculty;
