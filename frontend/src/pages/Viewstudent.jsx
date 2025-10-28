import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// ✅ Load backend URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

function Viewstudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true); // Optional: show loading state
  const [error, setError] = useState(null);     // Optional: show error

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/student/${id}`);
      setStudent(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch student details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading student details...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
        Student Details
      </h2>
      <div className="max-w-lg mx-auto bg-white rounded-2xl p-6 shadow-lg space-y-2">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Roll No:</strong> {student.rollno}</p>
      </div>
    </div>
  );
}

export default Viewstudent;
