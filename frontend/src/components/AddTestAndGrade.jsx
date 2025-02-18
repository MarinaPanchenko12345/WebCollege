import React, { useState } from "react";
import "./AddModal.css";
import { METHOD } from "../hooks/useStudentsAPI";

const AddTestAndGrade = ({
  isOpen,
  onClose,
  tests,
  student,
  fetchStudentsData,
  studentId,
  setStudent,
  setInitialStudent,
}) => {
  const [newTest, setNewTest] = useState({
    testId: "",
    grade: "",
  });

  if (!isOpen) return null;

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    setNewTest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const add = () => {
    if (!newTest.testId || !newTest.grade) {
      onClose();
      return;
    }
    const obj = { ...newTest, studentId };

    fetchStudentsData(METHOD.ADD_NEW_TEST, obj).then((data) => {
      const test = tests.find((t) => t.id === +data.testId);
      data.name = test?.name || "";
      setStudent((prev) => ({
        ...prev,
        grades: [...prev.grades, data],
      }));
      setInitialStudent((prev) => ({
        ...prev,
        grades: [...prev.grades, data],
      }));
      onClose();
    });
  };

  return (
    <div className='modal-frame'>
      <div className='modal'>
        <header>
          <button className='close' onClick={onClose}>
            x
          </button>
          <h2>Test Name</h2>
        </header>
        <section>
          <label>Test:</label>
          <select value={newTest.testId} name='testId' onChange={handleChange}>
            <option value=''></option>
            {tests
              .filter(
                (t) => !student.grades.map((g) => g.testId).includes(t.id)
              )
              .map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
          </select>
          <label>Grade:</label>
          <input
            className='gradeModal'
            type='number'
            max={100}
            min={0}
            value={newTest.grade}
            name='grade'
            onChange={handleChange}
          />
        </section>
        <footer>
          <button className='btn' onClick={add}>
            Add
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddTestAndGrade;
