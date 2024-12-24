import express from "express";
const router = express.Router();
import {getSkills} from "./controllers/skill-controller.js";

router.get("/skills", getSkills);

export default router;