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

