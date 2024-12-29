import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
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
        collection: 'Projects'
    });

const Projects = mongoose.model("Projects", ProjectSchema);
export default Projects;