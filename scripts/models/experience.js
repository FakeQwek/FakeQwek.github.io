import mongoose from "mongoose";

const ExperienceSchema = mongoose.Schema(
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
        collection: 'Experiences'
    });

const Experiences = mongoose.model("Experiences", ExperienceSchema);
export default Experiences; 