import express from "express";
import studentsRoute from "../handlers/students/students.mjs";
import testsRoute from "../handlers/tests/tests.mjs";
import dashboardRoute from "../handlers/dashboard/dashboard.mjs";

const router = express.Router();

router.use("/students", studentsRoute);
router.use("/tests", testsRoute);
router.use("/dashboard", dashboardRoute);

export default router;
