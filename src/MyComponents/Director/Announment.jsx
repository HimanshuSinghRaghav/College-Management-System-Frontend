import React, { useState, useEffect } from "react";
import axios from "axios";
import DirectorHelper from "./DirectorHelper";
import Horn from "../../assets/Horn.png";
import { toast } from 'react-toastify';
const Announment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fors, setFor] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/getAnnouncements")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const announcement = {
      title: title,
      description: description,
      for: fors
    };

    axios
      .post("http://localhost:5000/api/admin/postAnnouncements", announcement)
      .then((res) => {
        toast.success(res.data);
        console.log(res.data);
        setTitle("");
        setDescription("");
        // alert(res.data);
        
      })
      .catch((err) => {
        // console.log(err);
        toast.success(err);
      });
  };
  return (
    <div className="flex">
      <div>
        <DirectorHelper />
      </div>

      <div className="flex w-screen">
        <div className="flex items-center justify-center px-8">
          <div className=" rounded-xl shadow-xl w-[500px] flex h-[500px]">
            <div className="w-[40%] h-full  rounded-xl  bg-indigo-500 flex flex-col justify-center items-center text-white text-2xl font-semibold">
              <img
                className="w-28 h-28"
                src={Horn}
                alt="announcementt"
                srcset=""
              />
              Announcement
            </div>
            <form
              className="h-full grid place-items-center p-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="bg-white border rounded-lg border-gray-400 p-2 w-full"
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Enter Announcement title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="title"
                >
                  For
                </label>
                <select
                  className="bg-white border rounded-lg border-gray-400 p-2 w-full"
                  type="text"
                  id="for"
                  value={fors}
                  placeholder="Select For"
                  onChange={(e) => setFor(e.target.value)}
                >
                  <option selected disabled>Select For</option>
                  <option>student</option>
                  <option>feculty</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="bg-white border rounded-lg border-gray-400 p-2 w-full h-32"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write Annoucement hear"
                ></textarea>
              </div>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                type="submit"
              >
                Post Announcement
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center border-x scrollbar-hide overflow-scroll p-6">
          <h2 className="text-2xl font-medium">All Announcements</h2>
          <div className="w-full mt-4 scrollbar-hide overflow-scroll h-[500px]">
            {announcements.map((announcement) => (
              <div
                key={announcement._id}
                className="bg-white p-4 rounded-lg shadow-md flex border-2"
              >
                <img
                  className="w-14 h-14 rounded-full"       
                  src={Horn}
                  alt="announcementt"
                  srcset=""
                />
                <div>
                  <h3 className="text-xl font-medium">{announcement.title}</h3>
                  <p className="text-gray-700">{announcement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announment;
