import mongoose from "mongoose";

const CertificationSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        Description: {
            type: String,
            required: true,
        },
        Year: {
            type: Number,
            required: true,
        }
    }, {
        timestamps: true,
        collection: 'Certifications'
    });

const Certifications = mongoose.model("Certifications", CertificationSchema);
export default Certifications;