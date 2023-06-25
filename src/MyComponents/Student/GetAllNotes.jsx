import React, { useEffect, useState } from 'react'
import StudentHomeHelper from './StudentHomeHelper'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { Card , Button} from 'flowbite-react';
import PdfLogo from '../../assets/Pdf.jpg'
import { toast } from 'react-toastify';
const GetAllNotes = () => {
    const [pdfs, setPdfs] = useState([]);
    const store = useSelector((store) => store);

  
    useEffect(() => {
           axios.post('http://localhost:5000/api/student/notes', { year:store.student.student.student.year,department:store.student.student.student.department}).then((res)=>{
            setPdfs(res.data.pdfs)
           });
          

    }, []);
  
    const openPdf = (file) => {
        window.open(file, '_blank');
      }

  return (
    <div className='flex'>
      <StudentHomeHelper/>
      <div className='grid place-items-center overflow-scroll h-screen'>
        <p className="text-4xl text-center text-gray-600 font-serif p-2">Notes Section</p>
      <div className='grid grid-cols-3 gap-3 p-8 '>
      {pdfs.map(pdf => (
           
              <div className="max-w-sm shadow-xl rounded-xl ">
  <Card className='' imgSrc={PdfLogo}>
    <div className='flex justify-between'>
    <div className=''>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {pdf.subjectCode}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    {pdf.department} {pdf.year}
    </p>
    </div>
    <div>
    <Button
      className='bg-red-600 hover:bg-red-800'
      pill={true}
    >
      <a href={`http://localhost:5000/api/student/pdfs/${pdf._id}`} target="_blank">Click here</a>
    </Button>
  </div>
  </div>
  </Card>
</div>
            
            
          ))}
      </div>
      </div>
    </div>
  )
}

export default GetAllNotes
