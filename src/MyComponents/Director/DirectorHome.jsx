import React, { useState, useEffect } from "react";
import axios from "axios";
import DirectorHelper from "./DirectorHelper";
import Horn from "../../assets/Horn.png";
import { Carousel } from "flowbite-react";
import Database from "./Database";
import GroupPhoto from "../../assets/GroupPhoto.jpg";
import Computer_Lab from "../../assets/Computer_Lab.jpg";
import Building from "../../assets/Building.jpg";
import Play from "../../assets/Play.jpg";
import Library from "../../assets/Library.jpg"  
import { toast } from 'react-toastify';
const DirectorHome = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/getAnnouncements")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [currentPosition, setCurrentPosition] = useState({
    lat: 26.246118077398737,
    lng: 73.01825544127249,
  });
 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Geolocation is not supported by this browser.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  let component;
  switch (window.location.pathname) {
    case "/database":
      component = <Database />;
      break;

    case "/directorProfile":
      component = <Profile />;
      break;
  }
  return (
    <div className="w-screen h-screen flex">
      <div className="flex w-screen">
        <DirectorHelper />
        <div className="gird w-screen md:flex mt-20 md:mt-0">
          <div className="md:w-2/3 md:h-screen">
            <div>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                  <img
                    className="w-[800px] h-[340px]"
                    src={Building}
                    alt="..."
                  />
                  <img
                    className="w-[800px] h-[340px]"
                    src={GroupPhoto}
                    alt="..."
                  />
                  <img
                    className="w-[800px] h-[340px]"
                    src={Computer_Lab}
                    alt="..."
                  />
                  <img
                    className="w-[800px] h-[340px]"
                    src={Play}
                    alt="..."
                  />
                  <img
                    className="w-[800px] h-[340px]"
                    src={Library}
                    alt="..."
                  />
                </Carousel>
              </div>
            </div>

            <div className="flex">
              <div class=" p-4 w-1/2 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div className="google-map">
      <div className="map" id="map">
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${currentPosition.lat},${currentPosition.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
                
              </div>
              <div className="rounded-lg shadow-lg  w-1/2">
      <div className="bg-white p-10  ">
        <h1 className="text-2xl font-bold text-indigo-600">College Calendar</h1>
        <p className="text-gray-600 text-2xl font-bold">Today's date: {new Date().toLocaleDateString()}</p>
        <div className="mt-5">
          <p className="text-xl font-bold text-indigo-600">Watch</p>
          <p className="text-gray-600 text-4xl font-bold ">{time}</p>
        </div>
      </div>
    </div>
            </div>
            <div>
              
            </div>
          </div>

          <div></div>

          <div className="flex flex-col items-center border-x overflow-scroll p-6 md:w-1/3">
            <h2 className="text-2xl font-medium">All Announcements</h2>
            <div className="w-full mt-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement._id}
                  className="bg-white p-4 rounded-lg shadow-md flex"
                >
                  <img
                    className="w-14 h-14 rounded-full"
                    src={Horn}
                    alt="announcementt"
                    srcset=""
                  />
                  <div>
                    <h3 className="text-xl font-medium">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-700">{announcement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorHome;
