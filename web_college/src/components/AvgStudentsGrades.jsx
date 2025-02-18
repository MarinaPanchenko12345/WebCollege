import React, { useEffect, useState } from "react";
import "./../tags/Navbar.css";
import { useNavigate } from "react-router-dom";
import useStudentsAPI, {
  METHOD as STUDENTS_METHOD,
} from "../hooks/useStudentsAPI";
import Loader from "../helpers/Loader";
import BounceHeader from "../helpers/BounceHeader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AvgStudentsGrades = () => {
  const [page, setPage] = useState(1);
  const studentsPerPage = 10;
  const {
    data: students,
    fetchStudentsData,
    isLoading,
    error,
  } = useStudentsAPI();

  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudentsData(STUDENTS_METHOD.GET_STUDENTS_AVERAGE);
  }, [fetchStudentsData]);

  useEffect(() => {
    if (students.length > 0) {
      const numbers = students.map((x) => x.average);
      setMin(Math.min(...numbers));
      setMax(Math.max(...numbers));
    }
  }, [students]);

  //Pagination
  const totalPages = Math.ceil(students.length / studentsPerPage);
  const indexOfLastStudent = page * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (isLoading) return <Loader />;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!students || students.length === 0)
    return <div className='result'>No Result Found</div>;

  return (
    <div className='general'>
      <div>
        <BounceHeader text='Average Student Grades' />
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Average</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((s, i) => (
            <tr key={s.id || i}>
              <td>{indexOfFirstStudent + i + 1}</td>
              <td>
                {s.firstName} {s.lastName}
              </td>
              <td
                className={
                  Number(s.average) === min
                    ? "min"
                    : Number(s.average) === max
                    ? "max"
                    : ""
                }
              >
                {Number(s.average).toFixed(1)}
              </td>
              <td>
                <button
                  className='edit'
                  onClick={() => navigate(`/students/${s.id}/grades`)}
                >
                  ✏️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Stack spacing={2} className='pagination-container'>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color='success'
        />
      </Stack>
    </div>
  );
};

export default AvgStudentsGrades;
