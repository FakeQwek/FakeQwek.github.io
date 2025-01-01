import Experiences from "../models/experience.js";

export const getExperience = async (req, res) => {
    try {
        const experiences = await Experiences.find();
        res.status(200).json({success : true, data: experiences});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
   
}

