import express from "express";
import { con } from "../../db/db.mjs";

const router = express.Router();

//  Get all tests
router.get("/", (req, res) => {
  con.query(
    `
        SELECT
            t.id,
            t.name,
            AVG(tg.grade) AS avg
        FROM
            tests AS t
        LEFT JOIN test_grades AS tg
        ON
            t.id = tg.testId
        GROUP BY
            t.id
    `,
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send(result);
    }
  );
});

export default router;
