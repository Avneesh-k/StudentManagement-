import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // ✅ Import API URL from environment variables
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/student/allstudents`);
      setStudents(res.data);
    } catch (error) {
      console.error("Error while fetching students: " + error.message);
    }
  };

  const addStudent = () => {
    navigate('/add-student');
  };

  const Viewstudent = (id) => {
    navigate(`/view-student/${id}`);
  };

  const deletestudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/student/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error.message);
      alert('Failed to delete student');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
        Student List
      </h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={addStudent}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md"
        >
          Add Student
        </button>
      </div>

      <ul className="max-w-2xl mx-auto bg-white rounded-2xl p-4 space-y-4">
        {students.map((student) => (
          <li
            key={student._id}
            className="flex justify-between items-center bg-gray-50 shadow-md rounded-xl p-4 hover:bg-blue-50 transition-all duration-200"
          >
            <span className="text-lg font-medium text-gray-800">
              {student.name}
            </span>
            <div className="space-x-3">
              <button
                onClick={() => Viewstudent(student._id)}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                View
              </button>
              <button
                onClick={() => deletestudent(student._id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
