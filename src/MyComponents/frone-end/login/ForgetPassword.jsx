
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOTPStudent, submitOTPStudent } from '../../redux/action/studentAction'
import { getOTPFaculty, submitOTPFaculty } from '../../redux/action/facultyAction'
import {useNavigate} from "react-router-dom"

function ForgetPassword() {

const navigate = useNavigate()
const store = useSelector((store) => store)
const dispatch = useDispatch()
const history = useHistory()
const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [otp, setOtp] = useState('')
const [newPassword, setNewPassword] = useState('')
const [confirmNewPassword, setConfirmNewPassword] = useState("")
const [errors, setErrors] = useState({})
const [helper, setHelper] = useState(false)

useEffect(() => {
    setUser(props.match.params.user)
}, [user])

useEffect(() => {
    if (store.error) {
        setErrors(store.error)
    }
}, [store.error])

useEffect(() => {
    if (store.student.flag) {
        setHelper(true)
    }
},[store.student.flag])

const sendOTPHandler = (e) => {
    e.preventDefault()
    if (user === "student") {
        dispatch(getOTPStudent({ email }))
    }
    else if (user === "faculty") {
       dispatch(getOTPFaculty({email}))
    }
}

const submitOTPHandler = (e) => {
    e.preventDefault()
    if (user === "student") {
        dispatch(submitOTPStudent({ email, otp, newPassword, confirmNewPassword },history))
    }
    else if (user === "faculty")
    {
        dispatch(submitOTPFaculty({ email, otp, newPassword, confirmNewPassword }, history))
        }
}


  return (
    <div className="w-screen h-screen shadow-md flex flex-row min-h-screen justify-center items-center">
      <form noValidate onSubmit={sendOTPHandler}>
      <div className="w-80 h-72 border border-1 border-black rounded-md text-center">
      <a className='text-cyan-600'>Email</a><br/>
      <input className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 " onChange={(e) => setEmail(e.target.value)} value={email} type="email"  name='email' placeholder='Enter Your Email Address'></input><br/>
      {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
      <button className=" rounded-md mt-3 w-72 bg-blue-500 text-white h-8">Send OTP</button>
      <button className=" rounded-md mt-3 w-72 bg-blue-500 text-white h-8" onClick={() => navigate("/login")}>Back</button>
      </div>
      </form>
    </div>
  )
}

export default ForgetPassword
