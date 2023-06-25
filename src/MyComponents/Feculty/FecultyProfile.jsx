import React , {useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FecultyHomeHelper from './FecultyHomeHelper';
import { useSelector, useDispatch } from 'react-redux'
import { facultyUpdate, facultyLogout} from '../redux/action/facultyAction'
import { toast } from 'react-toastify';
const FecultyProfile = () => {
    const navigate = useNavigate()
    const store = useSelector((store) => store);
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState('')
  const email = store.faculty.faculty.faculty.email
    const imagehandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setAvatar(img)
        }
        e.preventDefault()
        const formData = new FormData()
       
        formData.append("avatar", avatar)
        console.log(avatar)
        dispatch(facultyUpdate(formData, navigate))
        // alert("Kindly login again to see updates")
        toast.success("Kindly login again to see updates");
        // dispatch(facultyLogout())
        // navigate('/')
    }

    const formHandler = async (e) => {
      console.log(avatar)
        // e.preventDefault()
        const formData = new FormData()
       
        formData.append("avatar", avatar)
        formData.append("email" , email)

        dispatch(facultyUpdate(formData, navigate))
        // alert("Kindly login again to see updates")
        toast.success("Kindly login again to see updates");
        // dispatch(facultyLogout())
        // navigate('/')
    }
  return (
    <div className=''>
       <div className="container flex ">
      <FecultyHomeHelper/>
   
        <>
          {/* <!-- Profile Card --> */}
          <div className="w-screen overflow-scroll h-[650px] scrollbar-hide border-4">
            <div class="bg-white p-3  ">
              <div class="image overflow-hidden">
                <img
                  class="h-60 w-60 mx-auto"
                  src={store.faculty.faculty.faculty.avatar}
                  alt=""
                />
                <div className="form-group">
                                    <label htmlFor="inputId">Profile Picture</label>
                                    <input required className="form-control" type="file" accept=".jpg,.png,.jpeg" id="inputId" onChange={imagehandler}></input>
                                </div>
                                <button onClick={()=>formHandler()}>upload</button>
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {store.faculty.faculty.faculty.name}
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                Feculty at Her {store.admin.admin.department}
              </h3>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">{store.faculty.faculty.faculty.joiningYear}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{store.faculty.faculty.faculty.name}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

"NA"
}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">
                      {store.admin.admin.contactNumber
                        ? store.admin.admin.contactNumber
                        : "NA"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Department</div>
                    <div className="px-4 py-2">
                    {store.faculty.faculty.faculty.department}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Registration Number
                    </div>
                    <div className="px-4 py-2">
                    {store.faculty.faculty.faculty.registrationNumber}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {store.faculty.faculty.faculty.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Joining Year</div>
                    <div className="px-4 py-2">
                    {store.faculty.faculty.faculty.joiningYear}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      
    </div>
    </div>
  )
}

export default FecultyProfile
