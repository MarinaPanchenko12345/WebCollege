import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStudentsAPI, {
  METHOD as STUDENTS_METHOD,
} from "../hooks/useStudentsAPI";
import AddTestAndGrade from "./AddTestAndGrade";
import useTestsAPI from "../hooks/useTestsAPI";
import Loader from "../helpers/Loader";
import BounceHeader from "../helpers/BounceHeader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { alertDelete } from "../helpers/Alert";

export function duplicateObj(objectOrArray) {
  return JSON.parse(JSON.stringify(objectOrArray));
}

export default function StudentGrades() {
  const [page, setPage] = useState(1);
  const gradesPerPage = 10;
  const { studentId } = useParams();
  const [student, setStudent] = useState();
  const [initialStudent, setInitialStudent] = useState();
  const [isModal, setIsModal] = useState(false);
  const { fetchStudentsData, isLoading, error } = useStudentsAPI();
  const {
    tests,
    fetchTests,
    isLoading: isTestsLoading,
    error: testsError,
  } = useTestsAPI();

  useEffect(() => {
    fetchStudentsData(STUDENTS_METHOD.GET_STUDENT_BY_ID, {
      id: studentId,
    }).then((data) => {
      setStudent(data);
      setInitialStudent(duplicateObj(data));
    });
    fetchTests();
  }, [studentId, fetchStudentsData, fetchTests]);

  const gradeChange = (i, ev) => {
    const { value } = ev.target;
    student.grades[i].grade = +value;
    setStudent({ ...student });
  };

  const save = () => {
    const data = student.grades.filter(
      (g) =>
        +initialStudent.grades.find((x) => x.id === g.id).grade !== +g.grade
    );
    fetchStudentsData(STUDENTS_METHOD.UPDATE_STUDENT_GRADES, {
      studentId,
      grades: data,
    }).then(() => {
      setInitialStudent(duplicateObj(student));
    });
  };

  const remove = async (testId, index) => {
    const isConfirmed = await alertDelete("You won't be able to revert this!");
    if (isConfirmed) {
      fetchStudentsData(STUDENTS_METHOD.DELETE_TEST, {
        studentId,
        testId,
      }).then(() => {
        student.grades.splice(index, 1);
        setStudent({ ...student });
        initialStudent.grades.splice(index, 1);
        setInitialStudent({ ...initialStudent });
      });
    }
  };

  //Pagination
  const totalPages = student
    ? Math.ceil(student.grades.length / gradesPerPage)
    : 1;
  const indexOfLastGrade = page * gradesPerPage;
  const indexOfFirstGrade = indexOfLastGrade - gradesPerPage;
  const currentGrades = student
    ? student.grades.slice(indexOfFirstGrade, indexOfLastGrade)
    : [];

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (isLoading || isTestsLoading) return <Loader />;
  if (error || testsError)
    return <div className='error'>Error: {error || testsError}</div>;
  if (!student) return <div className='result'>No Result Found</div>;

  return (
    <>
      {student && (
        <div className='general'>
          <div>
            <BounceHeader
              text={`Grades of ${student.user.firstName} ${student.user.lastName}`}
            />
          </div>
          <div>
            <div className='buttons'>
              <button className='btn' onClick={() => setIsModal(true)}>
                Add grade
              </button>
              <button className='btn' onClick={save}>
                Save
              </button>
            </div>
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Test</th>
                  <th>Grade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentGrades.map((s, i) => (
                  <tr key={s.id}>
                    <td>{indexOfFirstGrade + i + 1}</td>
                    <td>{s.name}</td>
                    <td>
                      <input
                        className='grade'
                        type='number'
                        value={s.grade}
                        onChange={(ev) => gradeChange(i, ev)}
                      />
                    </td>
                    <td>
                      <button
                        className='remove'
                        onClick={() => remove(s.id, i)}
                      >
                        ❌
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
        </div>
      )}
      <AddTestAndGrade
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        tests={tests}
        student={student}
        fetchStudentsData={fetchStudentsData}
        studentId={studentId}
        setStudent={setStudent}
        setInitialStudent={setInitialStudent}
      />
    </>
  );
}
