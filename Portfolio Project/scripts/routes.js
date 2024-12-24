import express from "express";
const router = express.Router();
import {getSkills} from "../scripts/controllers/skill-controller.js";

router.get("/skills", getSkills);

export default router;