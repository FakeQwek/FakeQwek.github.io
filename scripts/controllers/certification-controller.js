import Certifications from "../models/certification.js";

export const getCertification = async (req, res) => {
    try {
        const certifications = await Certifications.find();
        res.status(200).json({success : true, data: certifications});
    }
    catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
   
}

export const getCertificationById = async (req, res) => {
    try {
        let title = req.params['title'];
        const certification = await Certifications.findOne({Title: title});
        res.status(200).json({success: true, data: certification});
    }
    catch(error) {
        res.status(500).json({success: false, message: "Server Error"});
    }

}