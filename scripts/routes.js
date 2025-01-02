import express from "express";
const router = express.Router();
import {getSkills} from "./controllers/skill-controller.js";
import { getProjects } from "./controllers/project-controller.js";
import { getExperience, getExperienceById } from "./controllers/experience-controller.js";
import { getCertification, getCertificationById } from "./controllers/certification-controller.js";

router.get("/skill", getSkills);
router.get("/project", getProjects);
router.get("/experience", getExperience);
router.get("/certification", getCertification);
router.get("/experience/:title", getExperienceById);
router.get("/certification/:title", getCertificationById);

export default router;