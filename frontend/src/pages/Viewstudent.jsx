import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Viewstudent() {
    const {id} = useParams();
    const [student, setStudent] = useState(null)

    const fetchStudent = async()=>{
        try {
            const res = await axios.get(`${import.meta.env.API_URL}/api/student/${id}`);
            console.log(res.data)
            setStudent(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchStudent()
    },[])
      if (!student) {
    return <div className="text-center mt-10 text-gray-600">Loading student details...</div>;
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">Student Details</h2>
      <div className="max-w-lg mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Roll_No:</strong> {student.rollno}</p>
      </div>
    </div>
  )
}

export default Viewstudent
