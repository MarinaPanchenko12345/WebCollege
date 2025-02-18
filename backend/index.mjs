// index.mjs
import express from "express";
import { corsMiddleware } from "./middlewares/cors.mjs";
import router from "./routes/router.mjs";

const app = express();
const PORT = 5000;

app.use(express.json());
// הוספת איטיות בשרת
app.use((req, res, next) => {
  setTimeout(next, 700);
});
app.use(corsMiddleware);
app.use(router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
