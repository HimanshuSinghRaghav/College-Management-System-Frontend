import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { facultyLogin } from "../../redux/action/facultyAction";

import bg from "../../../assets/bg.png";

const FacultyLogin = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [facultyRegNum, setFacultyRegNum] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
 
  const [errors, setErrors] = useState({});

  const [isFacultyLoading, setIsFacultyLoading] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      navigate("/fecultyHome");
    }
  }, [store.faculty.isAuthenticated]);

  useEffect(() => {
    if (store.error) {
      setErrors(store.error);
    }
  }, [store.error]);
 



  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsFacultyLoading(true);
    dispatch(
      facultyLogin({
        registrationNumber: facultyRegNum,
        password: facultyPassword,
      })
    );
  };

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      setIsFacultyLoading(false);
    } else {
      setIsFacultyLoading(true);
    }
  }, [store.error, store.faculty.isAuthenticated]);

  


  return (
    <div className="bg-['url(../../../assets/bg.png')]">
      <form noValidate onSubmit={facultyFormHandler}>
        <div
          className="w-screen h-screen shadow-md flex flex-row min-h-screen justify-center items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-80 sm:w-96 h-72 px-8 space-y-4 border border-1 border-black rounded-md text-center bg-gray-200 opacity-95">
            <h1 className="text-2xl ">Login</h1>
            <div>
              <input
                className=" border border-1 border-black rounded-sm  w-full  shadow-sm h-8 "
                name="email"
                onChange={(e) => setFacultyRegNum(e.target.value)}
                type="text"
                value={facultyRegNum}
                id="facRegId"
                placeholder="Enter your ID"
                required
              ></input>
              {errors.registrationNumber && (
                <div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
                  {errors.registrationNumber}
                </div>
              )}
            </div>
         
            <div>
              <input
                className=" border border-1 border-black rounded-sm  w-full  shadow-sm h-8 "
                name="password"
                onChange={(e) => setFacultyPassword(e.target.value)}
                value={facultyPassword}
                type="password"
                id="passwordFacId"
                placeholder="Enter your Password"
              ></input>
              {errors.password && (
                <div className='text-red-600 flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>{errors.password}</div>
              )}
            </div>
         
            <a
              className="cursor-pointer text-blue-800"
              onClick={() => {
                navigate("/forgetpassword");
              }}
            >
              Forget password
            </a>

            <div class="row justify-content-center">
              <div class="col-md-1">
                {isFacultyLoading && (
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
            {!isFacultyLoading && (
              <button
                type="submit"
                className="rounded-md mt-3 w-72 bg-blue-500 text-white h-8 hover:bg-blue-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FacultyLogin;
