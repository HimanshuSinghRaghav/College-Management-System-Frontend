import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify';
const Edit = ({ setEdit , studata}) => {
  const [user, setUser] = useState({
    name: "",
    father_name: "",
    year: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, father_name, year, phone, email, password } = user;
    const data = {
      name: name,
      father_name: father_name,
      year: year,
      phone: phone,
      email: email,
      password: password,
    };
    console.log(data);
    axios.post("http://localhost:5000/posts/add", data).then((res) => {
      if (res.data.sucess) {
        setUser({
          name: "",
          father_name: "",
          year: "",
          phone: "",
          email: "",
          password: "",
        });
      }
    });
    setEdit(false)
    studata()
  };

  return (
    <aside className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50  md:place-items-center grid z-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 ml-[500px] mt-20"
        onClick={() => {
          setEdit(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <div className="bg-white w-screen md:w-[900px] h-96 md:h-[500px] rounded-md overflow-scroll">
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6"></div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>

                        <input
                          className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 "
                          type="text"
                          name="name"
                          value={user.name}
                          placeholder="Your Name"
                          onChange={handleChange}
                        ></input>
                        <br />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Father's Name
                        </label>
                        <input
                          className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 "
                          type="text"
                          name="father_name"
                          value={user.father_name}
                          placeholder="Father's Name"
                          onChange={handleChange}
                        ></input>
                        <br />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          className=" border border-1 border-black rounded-sm mt-3 w-72 "
                          type="text"
                          name="email"
                          value={user.email}
                          placeholder="Your Email"
                          onChange={handleChange}
                        ></input>
                        <br />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          className=" border border-1 border-black rounded-sm mt-6 w-72  shadow-sm h-8 "
                          type="tel"
                          name="phone"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                          value={user.phone}
                          placeholder="Your Name"
                          onChange={handleChange}
                        ></input>
                        <br />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          className=" border border-1 border-black rounded-sm mt-3 w-72 "
                          type="password"
                          name="password"
                          value={user.password}
                          placeholder="Your Password"
                          onChange={handleChange}
                        ></input>
                        <br />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Year
                        </label>
                        <select
                          className=" border border-1 border-black rounded-sm mt-3 w-72 "
                          type="text"
                          name="year"
                          value={user.year}
                          placeholder="Select Year"
                          onChange={handleChange}
                        >
                          <option>B.C.A 1st Year</option>
                          <option>B.C.A 2nd Year</option>
                          <option>B.C.A 3rd Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={onSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Edit;
