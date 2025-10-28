import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import AddStudent from './component/AddStudent';
import Viewstudent from './pages/Viewstudent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentList />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/view-student/:id" element={<Viewstudent/>} />
    </Routes>
  );
}

export default App;
