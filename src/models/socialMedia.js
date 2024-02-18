import mongoose from'mongoose';

const socialMediaSchema = new mongoose.Schema({
    linkedIn:{
        type: String,
       
    },
    twitter:{
        type: String,
    },
    github:{
        type: String,
    },
    instagram:{
        type: String
    }

})

const SocialMedia = mongoose.models.socialMedia || mongoose.model("socialMedia", socialMediaSchema);
export default SocialMedia;