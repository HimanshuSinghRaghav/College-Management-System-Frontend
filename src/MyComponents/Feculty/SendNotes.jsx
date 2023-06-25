import React, { useState } from "react";
import axios from "axios";
// import FecultyHomeHelper from "./FecultyHomeHelper";
import { Label , Button , TextInput , FileInput} from "flowbite-react";
import FecultyHomeHelper from "./FecultyHomeHelper";
import { Alert } from "flowbite-react";
import { toast } from 'react-toastify';
const SendNotes = () => {
  const [file, setFile] = useState(null);
  const [subjectCode , setSubjectCode] = useState('')
  const [year , setYear] = useState('')
  const [department , setDepartment] = useState('')
  const [error, setError] = useState(null);
  const [sucess , setSucess] = useState(null)


  const handleChangeSubjectCode = (e)=>{
    setSubjectCode(e.target.value);
  }

  const handleChangeYear = (e) =>{
    setYear(e.target.value)
    console.log(year)
  }

  
  const handleChangeDepartment = (e) =>{
    setDepartment(e.target.value)
    console.log(department);
  }

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("year",year);
    formData.append("department",department);
    formData.append("subjectCode",subjectCode)

    axios
      .post("http://localhost:5000/api/faculty/uploadPdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // alert(res.data.message)
        setSucess(res.data.message);
        setError(null)
      })
      .catch((err) => {
        setError(err.response.data.message);
        setSucess(null)
        console.log(err.response.data.message)
      });
  };

  return (
    <div className="flex">
        <div>
            <FecultyHomeHelper/>
            </div>
           
<div className="grid place-items-center w-screen">
{error && <Alert
  color="failure"
  // icon={}
>
  <span>
    <span className="font-medium">
      Info alert!
    </span>
    {' '}{error}
  </span>
</Alert>}
{sucess && <Alert
  color="success"
  onDismiss={function onDismiss(){return setSucess(null)}}
>
  <span>
    <span className="font-medium">
      Info alert!
    </span>
    {' '}Change a few things up and try submitting again.
  </span>
</Alert>}
 
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 shadow-xl p-14">
      <p className="text-center text-4xl text-gray-600">Upload Notes</p>
  <div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Enter Subject Code"
        value="Enter Subject Code"
      />
    </div>
    <TextInput
    onChange={(e)=>handleChangeSubjectCode(e)}
    value={subjectCode}
    placeholder="Enter Subject Code"
      id="subjectCode"
      type="text"
      sizing="sm"
    />
  </div>
    <div className="mb-2 block">
      <Label
        htmlFor="departmennt"
        value="enter department"
      />
    </div>
    <select onChange={(e)=>handleChangeDepartment(e)} value={department} type="text" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option disabled>Choose a department</option>
  <option value="B.C.A">B.C.A</option>
  <option value="M.C.A">M.C.A</option>
</select>
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="year"
        value="enter year"
      />
    </div>
    <select onChange={(e)=>handleChangeYear(e)} value={year}  id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option disabled>Choose a year</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
  </div>
  <div id="fileUpload">
  <div className="mb-2 block">
    <Label
      htmlFor="file"
      value="Upload file"
    />
  </div>
  <FileInput
  type="file" 
  onChange={handleChange}
    id="file"
    helperText="A profile picture is useful to confirm you are logged into your account"
  />
</div>
  
  <Button type="submit">
    Submit
  </Button>
</form>
</div>
      
    </div>
  );
};

export default SendNotes;
