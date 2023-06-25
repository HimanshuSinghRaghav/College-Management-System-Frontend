import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DirectorHelper from './DirectorHelper'
import { Badge } from 'flowbite-react';
import { toast } from 'react-toastify';
const GetAllComplaints = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        // Fetch all complaints from the backend
        axios.get('http://localhost:5000/api/admin/getAllComplaints')
            .then(res => {
                setComplaints(res.data.complaints);
                return;
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



  return (
    <div className='flex'>
        <div>
            <DirectorHelper/>
        </div>
              <div className='w-screen'>
            <p className='text-center text-4xl text-gray-600 font-serif font-semibold p-2'>Complaints</p>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-x-4">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="py-3 px-6">
                S.No.
                </th>
                        <th scope="col" class="py-3 px-6">Department</th>
                        <th scope="col" class="py-3 px-6">Student Name</th>
                        <th scope="col" class="py-3 px-6">Complaint</th>
                        <th scope="col" class="py-3 px-6">Status</th>
                        <th scope="col" class="py-3 px-6">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint ,index )=> (
                        <tr key={complaint._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                            <td class="py-4 px-6">{complaint.studentName}</td>
                            <td class="py-4 px-6">{complaint.department} {complaint.year}</td>
                            <td class="py-4 px-6">{complaint.complaint} </td>                           
                            <td class={`py-4 px-6 rounded-lg `}>{complaint.status==="pending"?<Badge color="failure"
    size="sm">pending</Badge>: <Badge
    color="success"
    size="sm"
  >
    Resolved
  </Badge>} </td>
                            <td class="py-4 px-6">{complaint.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default GetAllComplaints
