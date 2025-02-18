# Web College

## Overview

Web College is a full-stack web application that allows users to manage student data using a MySQL database. It provides a dashboard displaying key statistics and supports various operations such as retrieving student details, adding new students, updating information, and managing test scores.

## Installation and Setup

Follow these steps to set up and run the project:

### Clone the Repository

1. Open a terminal and navigate to the desired directory.
2. Clone the repository: https://github.com/MarinaPanchenko12345/WebCollege

### Database Setup (MySQL / phpMyAdmin)

1. Open **phpMyAdmin** in your browser.
2. Create a new database named **web_college**.
3. Import the SQL tables:

- Navigate to the **Import** section in phpMyAdmin.
- Select and import the following SQL files from the web_college folder:
  - **students.sql** (for student records)
  - **test_grades.sql** (for test scores)
  - **tests.sql** (for test details)

### Backend:

1. Navigate to the backend directory: cd backend
2. Install dependencies: npm install
3. Start the backend server: npm start

### Frontend:

1. Navigate to the backend directory: cd frontend
2. Install dependencies: npm install
3. Start the backend server: npm start

## Technologies Used

### Backend:

- **Node.js with Express.js for server-side logic**
- **MySQL (using mysql2 package) for database manage**
- **CORS for cross-origin resource sharing**
- **Nodemon for automatic server restarts during dev**
- **The page will reload when you make changes.**
- **You may also see any lint errors in the console.**

### Frontend:

- **React.js for building the UI**
- **React Router for navig**
- **Material UI for UI components**
- **Axios for API requests**
- **SweetAlert2 for alerts and notifications\***
- **Moment.js for date formatting**

## API Endpoints

### Students API:

- **GET /students** - Retrieve all students
- **GET /students/average** - Get the average grade of each student
- **GET /students/average-by-cities** - Get average student grades across cities
- **GET /students/:id** - Get a student by ID with test scores
- **POST /students** - Add a new student
- **PUT /students/:id** - Update student details
- **PUT /students/grade/:** - Update student grades
- **POST /students/test** - Insert a new test grade
- **DELETE /students/:studentId/test/:testId** - Delete a student's test score

### Tests API:

- **GET /tests - Retrieve all tests with average grades**

### Dashboard API:

- **GET /dashboard/students/amount** - Total number of students
- **GET /dashboard/cities/amount** - Total number of cities
- **GET /dashboard/tests/amount** - Total number of tests
- **GET /dashboard/tests/avg**- Average test scores
- **GET /dashboard/students/the-best** - Best student based on performance
- **GET /dashboard/cities/the-best** - Best performing city
- **GET /dashboard/students/birthday** - Students with upcoming birthdays

## Features

- **Student management (view, add, update, delete)**
- **Test score management**
- **Dashboard with key metrics**
- **REST API built with Express.js**
- **Frontend built with React.js and Material UI**

## License

This project is licensed under the **ISC License**.

## Author

**Marina Pan**
