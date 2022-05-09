import { Router } from "express";
import { convertFile } from "../controllers/convert";

const router = Router();

router.route("/").get(convertFile);

export default router;
