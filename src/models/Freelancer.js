
const mongoose = require('mongoose');

const FreelancerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    profilePic: {
        type: String,
    }, 
    skills:[{
        type: String
    }],
    specialty: {
        type: String,
    },
    about: {
        type: String
    },
    languages: [{
        type: String,
    }],
    yearsOfExperience: {
        type: Number
        
    },
    rating: {
        type: Number
    },
});

module.exports = mongoose.model('Freelancer', FreelancerSchema);