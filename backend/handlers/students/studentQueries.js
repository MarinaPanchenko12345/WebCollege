//  Get all students
export const GET_ALL_STUDENTS = "SELECT * FROM students";

//  Get the average grade for each student
export const GET_STUDENTS_AVERAGE = `
    SELECT
        s.id,
        s.firstName,
        s.lastName,
        AVG(tg.grade) AS average
    FROM
        students AS s
    LEFT JOIN test_grades AS tg
    ON
        tg.studentId = s.id
    GROUP BY
        s.id
`;

//  Get the average student grades across cities
export const GET_AVERAGE_BY_CITIES = `
    SELECT
        s.city,
        AVG(tg.grade) AS average
    FROM
        students AS s
    LEFT JOIN test_grades AS tg
    ON
        tg.studentId = s.id
    GROUP BY
        s.city
`;

//  Get student by ID
export const GET_STUDENT_BY_ID = "SELECT * FROM students WHERE id = ?";

//  Get student's test scores by student ID
export const GET_STUDENT_TEST_SCORES = `
    SELECT
    test_grades.id,
    tests.id AS testId,
    tests.name,
    test_grades.grade
FROM
    test_grades
LEFT JOIN tests ON tests.id = test_grades.testId
WHERE
    test_grades.studentId = ?
`;

//  Insert a new student
export const INSERT_NEW_STUDENT = `
    INSERT INTO students (firstName, lastName, phone, city, birthday)
    VALUES (?, ?, ?, ?, ?)
`;

//  Update student data
export const UPDATE_STUDENT_BY_ID = `
    UPDATE students 
    SET firstName = ?, lastName = ?, phone = ?, city = ?, birthday = ?
    WHERE id = ?
`;

//  Update student grades
export const UPDATE_STUDENT_GRADE = `
    UPDATE test_grades SET grade = ? WHERE id = ? AND studentId = ?
`;

//  Insert a new test grade for a student
export const INSERT_TEST_GRADE = `
    INSERT INTO test_grades(testId, studentId, grade)
    VALUES (?, ?, ?)
`;

//  Delete a student's test score
export const DELETE_STUDENT_TEST = `
    DELETE FROM test_grades WHERE id = ? AND studentId = ?
`;
