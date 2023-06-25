import React , {useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { studentLogin } from '../../redux/action/studentAction'
import bg from "../../../assets/bg.png";

const FacultyLogin = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()

    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
 
    const [errorsHelper, setErrorsHelper] = useState({})
  
    const [isStudentLoading, setIsStudentLoading] = useState(false)


    const navigate = useNavigate()


    useEffect(() => {
        if (store.student.isAuthenticated) {
            navigate('/studentHome')
        }
    }, [store.student.isAuthenticated])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])





    const studentFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

    useEffect(() => {
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

  return (
    <div className="bg-['url(../../../assets/bg.png')]">
       <form noValidate onSubmit={studentFormHandler}>
        <div className="w-screen h-screen shadow-md flex flex-row min-h-screen justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="w-80 sm:w-96 h-72 space-y-4 border px-8 border-1 border-black rounded-md text-center bg-gray-200 opacity-95">
            <h1 className="text-2xl mt-3">Login</h1>
            <div>
            <input className=" border border-1 border-black rounded-sm  w-full  shadow-sm h-8 "  name="email"  onChange={(e) => setStudentRegNum(e.target.value)} type="text" value={studentRegNum} placeholder="Enter your ID" required></input>
            {errorsHelper.registrationNumber && (
                                            <div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                          </svg>{errorsHelper.registrationNumber}</div>
                                        )}
            </div>
            <div >
            <input className=" border border-1 border-black rounded-sm  w-full  shadow-sm h-8 "  type="password" name="password"   onChange={(e) => setStudentPassword(e.target.value)} value={studentPassword} placeholder="Enter your Password"></input>
            {errorsHelper.password && (
                                            <div className='text-red-600 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                          </svg>{errorsHelper.password}</div>
                                        )}
            </div>
            <a className="cursor-pointer text-blue-800" onClick={()=>{navigate("/forgetpassword")}}>Forget password</a>
            <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isStudentLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {!isStudentLoading && <button type="submit" className=" rounded-md mt-3 w-72 bg-blue-500 text-white h-8 hover:bg-blue-300">Login</button>}
            
            
            
        </div>
        </div>
        </form>
        </div>
  )
}

export default FacultyLogin