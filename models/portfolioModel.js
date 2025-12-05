const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    summary: {
        type: String,
        default: 'Passionate Full Stack Developer with expertise in MERN stack.',
    },
    skills: {
        technical: [{ name: String, icon: String }],
        professional: [{ name: String, icon: String }],
        soft: [{ name: String, icon: String }],
    },
    projects: {
        study: [{
            title: String,
            description: String,
            link: String,
            skills: [String],
        }],
        worked: [{
            title: String,
            description: String,
            link: String,
            skills: [String],
        }],
    },
    experience: [{
        role: String,
        company: String,
        duration: String,
        description: String,
    }],
    education: [{
        degree: String,
        institution: String,
        duration: String,
        description: String,
        marks: String,
    }],
    certifications: [{
        title: String,
        subtitle: String,
        description: String,
    }],
    socials: {
        email: String,
        phone: String,
        whatsapp: String,
        linkedin: String,
        github: String,
    },
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
