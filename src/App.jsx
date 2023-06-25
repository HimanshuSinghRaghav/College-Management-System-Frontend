import { PureComponent, useState } from 'react'
import { Route, Router, Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import { setFacultyUser, facultyLogout } from '../src/MyComponents/redux/action/facultyAction'

import { setAdminUser, adminLogout, adminGetAllStudent } from '../src/MyComponents/redux/action/adminAction'

import { setStudentUser, studentLogout } from '../src/MyComponents/redux/action/studentAction'

import jwt_decode from 'jwt-decode';
import store from '../src/MyComponents/redux/store'

import ForgetPassword from './MyComponents/frone-end/login/ForgetPassword'
import DirectorLogin from './MyComponents/frone-end/login/DirectorLogin'
import Register from './MyComponents/frone-end/register/register'
import { Home } from './MyComponents/Home'
import GetAllFaculty from './MyComponents/Director/GetAllFaculty'
import GetAllStudent from './MyComponents/Director/GetAllStudent'

import FacultyLogin from './MyComponents/frone-end/login/FacultyLogin'
import StudentLogin  from './MyComponents/frone-end/login/StudentLogin'
import DirectorHome from './MyComponents/Director/DirectorHome'
import Database from './MyComponents/Director/Database'
import Profile from './MyComponents/Director/Profile'
import FecultyHome from './MyComponents/Feculty/FecultyHome'
import AddSubject from './MyComponents/Director/AddSubject'
import MarkAttendance from './MyComponents/Feculty/MarkAttendance'
import StudentHome from './MyComponents/Student/StudentHome'
import StudentAttendance from './MyComponents/Student/StudentAttendance'
import StudentSubjects from './MyComponents/Student/StudentSubjects'
import StudentTestPerformance from './MyComponents/Student/StudentTestPerformance'
import FecultyUploadMarks from './MyComponents/Feculty/FecultyUploadMarks'
import FecultyAddStudent from './MyComponents/Feculty/FecultyAddStudent'
import Chat from './MyComponents/Student/Chat'
import RecieverUserDetails from './MyComponents/Student/RecieverUserDetails'
import Chatboard  from './MyComponents/Student/Chatboard'
import FecultyProfile from './MyComponents/Feculty/FecultyProfile'
import UploadAssignments from './MyComponents/Feculty/UploadAssignments'
import Assignments from './MyComponents/Student/Assignments'
import StudentSubjectList from './MyComponents/Student/StudentSubjectList'
import Complaint from './MyComponents/Student/Complaint'
import GetAllComplaints from './MyComponents/Director/GetAllComplaints'
import Announment from './MyComponents/Director/Announment'
import SendNotes from './MyComponents/Feculty/SendNotes'
import GetAllNotes from './MyComponents/Student/GetAllNotes'
import setAuthToken from './MyComponents/redux/utils/setAuthToken'
import AddFeculty from './MyComponents/Director/AddFeculty'
import About1 from './MyComponents/About1'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  if (window.localStorage.facultyJwtToken) {
    setAuthToken(localStorage.facultyJwtToken);
    const decoded = jwt_decode(localStorage.facultyJwtToken);
   
    store.dispatch(setFacultyUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(facultyLogout());
      window.location.href = '/';
    }
  }
  else if (window.localStorage.studentJwtToken) {
    setAuthToken(localStorage.studentJwtToken);
    const decoded = jwt_decode(localStorage.studentJwtToken);
  
    store.dispatch(setStudentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(studentLogout());
      window.location.href = '/';
    } 
  }
  else if (window.localStorage.adminJwtToken) {
    setAuthToken(localStorage.adminJwtToken);
    const decoded = jwt_decode(localStorage.adminJwtToken);
  
    store.dispatch(setAdminUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(adminLogout());
      window.location.href = '/';
    } 
  }
 
  return (
  <>
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<About1/>}/>
          
      <Route exact path="/loginDirector" element={<DirectorLogin/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route exact path="/facultytLogin" element={<FacultyLogin/>}/>
      <Route exact path="/studentLogin" element={<StudentLogin/>}/>
      <Route exact path="/database" element={<Database/>}/>
      <Route exact path="/directorHome/getAllStudent" element={<GetAllStudent/>}/>
      <Route exact path="/directorHome/getAllFaculty" element={<GetAllFaculty/>}/>
      <Route exact path="/directorHome/addFeculty" element={<AddFeculty/>} />
      <Route exact path="/directorHome" element={<DirectorHome/>}/>
      <Route exact path='/directorProfile' element={<Profile/>}/>
      <Route exact path='/diractorHome/addSubject' element={<AddSubject/>}/>
      <Route exact path='/directorHome/postAnnouncement' element={<Announment/>}/>
      <Route exact path='/fecultyHome/getAllComplaints' element={<GetAllComplaints/>} />
      <Route exact path='/fecultyHome' element={<FecultyHome/>}/>
      <Route exact path='/fecultyHome/markAttendance' element={<MarkAttendance/>}/>
      <Route exact path='/fecultyHome/uploadMarks' element={<FecultyUploadMarks/>} />
      <Route exact path='/studentHome/getAllNotes' element={<GetAllNotes/>} />
      <Route exact path='/fecultyHome/uploadAssignments' element={<UploadAssignments/>} />
      <Route exact path='/fecultyHome/profile' element={<FecultyProfile/>} />
      {/* <Route exact path="/fecultyHome/updateProfile" element={<} */}
      <Route exact path='/fecultyHome/addStudent' element={<FecultyAddStudent/>} />
      <Route exact path='/studentHome' element={<StudentHome/>} />
      <Route exact path='/studentHome/studentAttendance' element={<StudentAttendance/>} />
      <Route exact path='/studentHome/studentTestPerformance' element={<StudentTestPerformance/>} />
      <Route exact path='/studentHome/studentSubjects' element={<StudentSubjectList/>} />
      <Route exact path='/studentHome/complaint' element={<Complaint/>}/>
      <Route exact path='/studentHome/chat' element={<Chat/>} />
      <Route exact path='/chat/:id' element={<Chatboard/>} />
      <Route exact path='/studentHome/assignments' element={<Assignments/>} />
      <Route exact path='/studentHome/studentSubject' element={<StudentSubjectList/>}/>
      <Route exact path="/studentHome/:registrationNumber" component={<RecieverUserDetails/>} />
      <Route exact path='/studentHome/sendNotes' element={<SendNotes/>}/>
 
    </Routes>

  </BrowserRouter>
  <ToastContainer />
  </>      
  )
}

export default App
