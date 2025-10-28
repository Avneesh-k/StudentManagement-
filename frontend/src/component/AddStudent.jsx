import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: '',
    email: '',
    course: '',
    rollno: '',
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/student/addstudent', formData);
      navigate('/'); // go back to list after adding
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Failed to add student');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-700">
          Add New Student
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-3"
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Enter course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-3"
            required
          />
          <input
            type="text"
            name="rollno"
            placeholder="Enter roll number"
            value={formData.roll_no}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-3"
            required
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
