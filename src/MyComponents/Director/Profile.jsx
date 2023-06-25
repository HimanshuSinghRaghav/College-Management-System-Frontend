import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DirectorHelper from "./DirectorHelper";
import { toast } from 'react-toastify';
const Profile = () => {
  const store = useSelector((store) => store);

  return (
    <div className="container flex">
      <DirectorHelper />
      {store.admin.isAuthenticated ? (
        <>
          {/* <!-- Profile Card --> */}
          <div className="overflow-scroll scrollbar-hide h-screen w-screen border-2 border-gray-400">
            <div class="bg-white p-3 ">
              <div class="image overflow-hidden">
                <img
                  class="h-60 w-60 mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
                {/* <button>click</button> */}
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              {store.admin.admin.name}
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her {store.admin.admin.department}
              </h3>
              
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
                  <span class="ml-auto">{store.admin.admin.joiningYear}</span>
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
                    <div className="px-4 py-2">{store.admin.admin.name}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
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
                      {store.admin.admin.department}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Registration Number
                    </div>
                    <div className="px-4 py-2">
                      {store.admin.admin.registrationNumber}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {store.admin.admin.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Joining Year</div>
                    <div className="px-4 py-2">
                      {store.admin.admin.joiningYear}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No Data to Show</p>
      )}
    </div>
  );
};

export default Profile;
