import express from "express";
const router = express.Router();
import {getSkills} from "./controllers/skill-controller.js";
import { getProjects } from "./controllers/project-controller.js";

router.get("/skill", getSkills);
router.get("/project", getProjects);

export default router;