import express from "express";
import { getAllStudent } from "../controllers/studentController";

const studentRoute = express.Router();

studentRoute.route("/").get(getAllStudent);
export default studentRoute;
