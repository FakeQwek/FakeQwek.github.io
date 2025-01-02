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

export const getExperienceById = async (req, res) => {
    try {
        let title = req.params['title'];
        const experience = await Experiences.findOne({Title: title});
        res.status(200).json({success: true, data: experience});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }

}

