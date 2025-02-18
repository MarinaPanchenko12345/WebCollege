// index.mjs
import express from "express";
import { corsMiddleware } from "./middlewares/cors.mjs";
import router from './routes/router.mjs';

const app = express();

app.use(express.json());
// הוספת איטיות בשרת
app.use((req, res, next) => {
  setTimeout(next, 700);
});
app.use(corsMiddleware);
app.use(router);

// Start server
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
