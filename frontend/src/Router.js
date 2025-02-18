import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Average from "./components/AvgStudentsGrades";
import Cities from "./components/AvgGradesByCities";
import StudentGrades from "./components/StudentGrades";
import Dashboard from "./tags/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/students' element={<Students />} />
      <Route path='/average' element={<Average />} />
      <Route path='/cites' element={<Cities />} />
      <Route path='/students/:studentId/grades' element={<StudentGrades />} />
    </Routes>
  );
};

export default Router;
