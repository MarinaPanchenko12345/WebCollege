import express from "express";
import { con } from "../../db/db.mjs";
import {
  GET_STUDENTS_AMOUNT,
  GET_CITIES_AMOUNT,
  GET_TESTS_AMOUNT,
  GET_TESTS_AVG,
  GET_BEST_STUDENT,
  GET_BEST_CITY,
  GET_STUDENTS_BIRTHDAY,
} from "./dashboardQueries.js";

const router = express.Router();

router.get("/students/amount", (req, res) => {
  con.query(GET_STUDENTS_AMOUNT, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0].amount.toString());
  });
});

router.get("/cities/amount", (req, res) => {
  con.query(GET_CITIES_AMOUNT, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0].amount.toString());
  });
});

router.get("/tests/amount", (req, res) => {
  con.query(GET_TESTS_AMOUNT, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0].amount.toString());
  });
});

router.get("/tests/avg", (req, res) => {
  con.query(GET_TESTS_AVG, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result[0].avg.toString());
  });
});

router.get("/students/the-best", (req, res) => {
  con.query(GET_BEST_STUDENT, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.pop());
  });
});

router.get("/cities/the-best", (req, res) => {
  con.query(GET_BEST_CITY, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.pop());
  });
});

router.get("/students/birthday", (req, res) => {
  con.query(GET_STUDENTS_BIRTHDAY, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

export default router;
