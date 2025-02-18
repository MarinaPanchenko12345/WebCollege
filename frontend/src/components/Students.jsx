import React, { useEffect, useState } from "react";
import moment from "moment";
import "./Students.css";
import useStudentsAPI, {
  METHOD as STUDENTS_METHOD,
} from "../hooks/useStudentsAPI";
import Loader from "../helpers/Loader";
import BounceHeader from "../helpers/BounceHeader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import UpdateStudent from "./UpdateStudent";
import AddStudent from "./AddStudent";

const Students = () => {
  const [page, setPage] = useState(1);
  const studentsPerPage = 10;
  const { fetchStudentsData, isLoading, error } = useStudentsAPI();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetchStudentsData(STUDENTS_METHOD.GET_ALL_STUDENTS).then((data) => {
      if (Array.isArray(data)) {
        setStudentsList([...data]);
      } else {
        setStudentsList([]);
      }
    });
  }, [fetchStudentsData]);

  //Pagination
  const totalPages = studentsList?.length
    ? Math.ceil(studentsList.length / studentsPerPage)
    : 1;
  const indexOfLastStudent = page * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = Array.isArray(studentsList)
    ? studentsList.slice(indexOfFirstStudent, indexOfLastStudent)
    : [];

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleEditClick = (student) => {
    setSelectedStudent({ ...student });
    setIsEditModalOpen(true);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  if (isLoading) return <Loader />;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!studentsList || studentsList.length === 0)
    return <div className='result'>No Result Found</div>;

  return (
    <div className='general'>
      <div>
        <BounceHeader text='Students' />
      </div>
      <div className='buttons'>
        <button className='btn' onClick={handleAddClick}>
          Add Student
        </button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>Birthday</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((s, i) => (
            <tr key={s.id}>
              <td>{indexOfFirstStudent + i + 1}</td>
              <td>
                {s.firstName} {s.lastName}
              </td>
              <td> {s.phone}</td>
              <td>{s.city}</td>
              <td>{moment(s.birthday).format("DD/MM/YYYY")}</td>
              <td>
                <button className='edit' onClick={() => handleEditClick(s)}>
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
      <UpdateStudent
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        student={selectedStudent}
        fetchStudentsData={fetchStudentsData}
        updateStudentList={setStudentsList}
      />
      <AddStudent
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        fetchStudentsData={fetchStudentsData}
        addStudent={setStudentsList}
      />
    </div>
  );
};

export default Students;
