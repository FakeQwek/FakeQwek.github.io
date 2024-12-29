import Projects from "../models/project.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json({success : true, data: projects});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
   
}

