import mongoose, { Schema, mongo } from "mongoose";

const userSchema = new Schema({

    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
    certificates: [
        {
            type: String
        }
    ],
    collegeName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "education"
    },
    Experiences: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "experience"
        }
    ],
    skills: [
        {
            type: String,
            requried: true
        }
    ],
    bioLink: {
        type: String
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
        }
    ],
    socialMedia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialMedia'
    },
    contactUs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contactUs'
    }




})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;