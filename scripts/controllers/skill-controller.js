import Skill from "../models/skill.js";

export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json({success : true, data: skills});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
   
}

export default getSkills;  