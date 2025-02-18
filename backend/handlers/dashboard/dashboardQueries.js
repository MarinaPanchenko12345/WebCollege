//  Get the total number of students
export const GET_STUDENTS_AMOUNT = "SELECT COUNT(*) amount FROM students";

//Get the total number of cities
export const GET_CITIES_AMOUNT =
  "SELECT COUNT(DISTINCT city) amount FROM students";

// Get the total number of tests
export const GET_TESTS_AMOUNT = "SELECT COUNT(*) amount FROM tests";

//Get the average grade of all tests
export const GET_TESTS_AVG = "SELECT AVG(grade) avg FROM test_grades";

//Get the best student with the highest average grade
export const GET_BEST_STUDENT = `
        SELECT s.firstName, s.lastName, AVG(tg.grade) grade
        FROM test_grades AS tg
        LEFT JOIN students AS s
        ON s.id = tg.studentId
        GROUP BY s.id
        ORDER BY grade DESC LIMIT 1
    `;

//Get the city with the highest average student grades
export const GET_BEST_CITY = `
        SELECT s.city, AVG(tg.grade) grade
        FROM test_grades AS tg
        LEFT JOIN students AS s
        ON s.id = tg.studentId
        GROUP BY s.city
        ORDER BY grade DESC LIMIT 1
    `;

//Get the  students whose birthday is in the current date
export const GET_STUDENTS_BIRTHDAY = `
        SELECT
            id,
            firstName,
            lastName,
            TIMESTAMPDIFF(YEAR, birthday, CURDATE()) AS age
        FROM
            students
        WHERE
            MONTH(birthday) = MONTH(CURRENT_DATE);
    `;
