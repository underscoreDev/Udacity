import express from "express";
import studentRouter from "./routes/studentRoute";
import convertRouter from "./routes/convert";

const app = express();
const port = 9899;

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/convert", convertRouter);

app.get("/api", (_req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

export default app;
