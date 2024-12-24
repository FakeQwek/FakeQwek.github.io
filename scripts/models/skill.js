import mongoose from "mongoose";

const SkillSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        Description: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
        collection: 'Skills'
    });

const Skills = mongoose.model("Skills", SkillSchema);
export default Skills;