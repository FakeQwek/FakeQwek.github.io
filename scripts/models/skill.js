const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    });

const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;