import React, { useEffect, useState } from "react";
import "./AddModal.css";
import { METHOD } from "../hooks/useStudentsAPI";
import { showAlert } from "../helpers/Alert";

const UpdateStudent = ({
  isOpen,
  onClose,
  student,
  fetchStudentsData,
  updateStudentList,
}) => {
  const [updatedStudent, setUpdatedStudent] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    birthday: "",
  });

  useEffect(() => {
    if (student) {
      setUpdatedStudent({
        firstName: student.firstName || "",
        lastName: student.lastName || "",
        phone: student.phone || "",
        city: student.city || "",
        birthday: student.birthday
          ? new Date(
              new Date(student.birthday).getTime() -
                new Date().getTimezoneOffset() * 60000
            )
              .toISOString()
              .split("T")[0]
          : "",
      });
    }
  }, [student]);

  if (!isOpen || !updatedStudent) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { firstName, lastName, phone, city, birthday } = updatedStudent;
    if (!firstName || !lastName || !phone || !city || !birthday) {
      showAlert("All fields are required", "warning");
      return;
    }
    await fetchStudentsData(METHOD.UPDATE_STUDENT_INFO, {
      id: student.id,
      firstName,
      lastName,
      phone,
      city,
      birthday,
    });

    updateStudentList((prevStudents) =>
      prevStudents.map((s) =>
        s.id === student.id
          ? { ...s, firstName, lastName, phone, city, birthday }
          : s
      )
    );
    onClose();
  };

  return (
    <div className='modal-frame'>
      <div className='modal'>
        <header>
          <button className='close' onClick={onClose}>
            x
          </button>
          <h2>Edit Student</h2>
        </header>
        <section>
          <label>First Name:</label>
          <input
            type='text'
            name='firstName'
            value={updatedStudent.firstName || ""}
            onChange={handleChange}
          />
          <label>Last Name:</label>
          <input
            type='text'
            name='lastName'
            value={updatedStudent.lastName || ""}
            onChange={handleChange}
          />
          <label>Phone:</label>
          <input
            type='text'
            name='phone'
            value={updatedStudent.phone || ""}
            onChange={handleChange}
          />
          <label>City:</label>
          <input
            type='text'
            name='city'
            value={updatedStudent.city || ""}
            onChange={handleChange}
          />
          <label>Birthday:</label>
          <input
            type='date'
            name='birthday'
            value={updatedStudent.birthday || ""}
            onChange={handleChange}
          />
        </section>
        <footer>
          <button className='btn' onClick={handleSubmit}>
            Save Changes
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UpdateStudent;
