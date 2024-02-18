import mongoose from'mongoose';


const educationSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    startYear: {
        type: String,
        required: true
    },
    endYear: {
        type: String,
        required: true
    },
    certificateLink: {
        type: String,
        required: true
    }
})

const Education = mongoose.models.education || mongoose.model("education", educationSchema);
export default Education;