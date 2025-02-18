import React, { useState } from "react";
import "./AddModal.css";
import { METHOD } from "../hooks/useStudentsAPI";
import { showAlert } from "../helpers/Alert";

const AddStudent = ({ isOpen, onClose, fetchStudentsData, addStudent }) => {
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    birthday: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { firstName, lastName, phone, city, birthday } = newStudent;

    if (!firstName || !lastName || !phone || !city || !birthday) {
      showAlert("All fields are required", "warning");
      return;
    }
    try {
      const newStudentData = await fetchStudentsData(METHOD.ADD_NEW_STUDENT, {
        firstName,
        lastName,
        phone,
        city,
        birthday,
      });
      // Update the list of students without reloading the page
      addStudent((prevList) => [...prevList, newStudentData]);
      onClose();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className='modal-frame'>
      <div className='modal'>
        <header>
          <button className='close' onClick={onClose}>
            x
          </button>
          <h2>Add Student</h2>
        </header>
        <section>
          <label>First Name:</label>
          <input
            type='text'
            name='firstName'
            value={newStudent.firstName}
            onChange={handleChange}
          />
          <label>Last Name:</label>
          <input
            type='text'
            name='lastName'
            value={newStudent.lastName}
            onChange={handleChange}
          />
          <label>Phone:</label>
          <input
            type='text'
            name='phone'
            value={newStudent.phone}
            onChange={handleChange}
          />
          <label>City:</label>
          <input
            type='text'
            name='city'
            value={newStudent.city}
            onChange={handleChange}
          />
          <label>Birthday:</label>
          <input
            type='date'
            name='birthday'
            value={newStudent.birthday}
            onChange={handleChange}
          />
        </section>
        <footer>
          <button className='btn' onClick={handleSubmit}>
            Add Student
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddStudent;
