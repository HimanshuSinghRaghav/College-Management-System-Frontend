import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../../redux/action/adminAction'

import bg from "../../../assets/bg.png"


const Login = () => {

  const store = useSelector((store) => store)
  const dispatch = useDispatch( )
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
      if (store.admin.isAuthenticated) {
          navigate('/directorHome')
      }
  }, [store.admin.isAuthenticated])
  useEffect(() => {
      if (store.error) {
          setError(store.error)
      }
  }, [store.error])

  const fromHandler = (e) => {
      e.preventDefault()
      setIsLoading(true)
      dispatch(adminLogin({registrationNumber, password}))
     
  }

  useEffect(() => {
      if (store.error ||
          store.admin.isAuthenticated) {
          setIsLoading(false)
      }
      
      else {
          setIsLoading(true)
      }
  }, [store.error, store.admin.isAuthenticated])

    return (
      <div className="bg-['url(../../../assets/bg.png')]">
       <form noValidate onSubmit={fromHandler}>
        <div className="w-screen h-screen shadow-md flex flex-row min-h-screen justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="w-80 sm:w-96 h-72 border border-1 border-black rounded-md text-center bg-gray-200 opacity-95">
            <h1 className="text-2xl mt-3">Login</h1>
            <div>
            <input className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 "  onChange={(e) => setRegistrationNumber(e.target.value)} type="email" value={registrationNumber} placeholder="Enter your ID" required></input>

            {error.registrationNumber && (<div className='text-red-600 flex mx-12'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.registrationNumber}</div>)}
            </div>
            
            <div>
            <input className=" border border-1 border-black rounded-sm mt-3 w-72  shadow-sm h-8 " type='password' name="password"  onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your Password" required></input>
            {error.password && (<div className='text-red-600 flex mx-12'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>{error.password}</div>)}
            </div>
            <a className="cursor-pointer text-blue-800" onClick={()=>{navigate("/forgetpassword")}}>Forget password</a>
           
            <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {!isLoading && <button type="submit" className="rounded-md mt-3 w-72 bg-blue-500 text-white h-8 hover:bg-blue-300">Login</button>}
        </div>
        </div>
        </form>
        </div>
    )
}

export default Login