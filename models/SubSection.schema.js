const mongoose = require("mongoose")

const subSection = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        timeDuration: {
            type: String,
        },
        description: {
            type: String,
        },
        vidoUrl: {
            type: String,
        },
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("SubSection", subSection)