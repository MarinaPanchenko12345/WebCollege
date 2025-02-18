import express from "express";
import { con } from "../../db/db.mjs";
import {
  GET_ALL_STUDENTS,
  GET_STUDENTS_AVERAGE,
  GET_AVERAGE_BY_CITIES,
  GET_STUDENT_BY_ID,
  GET_STUDENT_TEST_SCORES,
  INSERT_NEW_STUDENT,
  UPDATE_STUDENT_BY_ID,
  UPDATE_STUDENT_GRADE,
  INSERT_TEST_GRADE,
  DELETE_STUDENT_TEST,
} from "./studentQueries.js";

const router = express.Router();

//Get all students
router.get("/", (req, res) => {
  con.query(GET_ALL_STUDENTS, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//Get the average grade for each student
router.get("/average", (req, res) => {
  con.query(GET_STUDENTS_AVERAGE, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//Get the average student grades across cities
router.get("/average-by-cites", (req, res) => {
  con.query(GET_AVERAGE_BY_CITIES, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

//Get data about a student by his id, including his test scores.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  con.query(GET_STUDENT_BY_ID, [id], (err, result) => {
    if (err) {
      throw err;
    }
    const user = result.pop();
    con.query(GET_STUDENT_TEST_SCORES, [id], (err, grades) => {
      if (err) {
        throw err;
      }
      res.send({
        user,
        grades,
      });
    });
  });
});

//Insert a new student
router.post("/", (req, res) => {
  let { firstName, lastName, phone, city, birthday } = req.body;
  con.query(
    INSERT_NEW_STUDENT,
    [firstName, lastName, phone, city, birthday],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({
        id: result.insertId,
        firstName,
        lastName,
        phone,
        city,
        birthday,
      });
    }
  );
});

//Update student data by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phone, city, birthday } = req.body;
  con.query(
    UPDATE_STUDENT_BY_ID,
    [firstName, lastName, phone, city, birthday, id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send({ id: result.id, firstName, lastName, phone, city, birthday });
    }
  );
});

//Update student grades
router.put("/grade/:studentId", (req, res) => {
  const { studentId } = req.params;
  const grades = req.body;
  for (const g of grades) {
    con.query(UPDATE_STUDENT_GRADE, [g.grade, g.id, studentId]);
  }
  res.end();
});

//Insert a new test grade for a student
router.post("/test", (req, res) => {
  const { studentId, testId, grade } = req.body;
  con.query(INSERT_TEST_GRADE, [testId, studentId, grade], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({
      id: result.insertId,
      testId: +testId,
      grade: +grade,
    });
  });
});

//Delete a student's test score
router.delete("/:studentId/test/:testId", (req, res) => {
  const { studentId, testId } = req.params;

  con.query(DELETE_STUDENT_TEST, [testId, studentId], (err, result) => {
    if (err) {
      throw err;
    }
    res.end();
  });
});

export default router;
