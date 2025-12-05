const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Portfolio = require('./models/portfolioModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding Portfolio'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const seedPortfolio = async () => {
    try {
        await Portfolio.deleteMany({}); // Clear existing data

        await Portfolio.create({
            summary: 'Passionate Full Stack Developer with expertise in MERN stack. Dedicated to building futuristic and user-centric web applications.',
            skills: {
                technical: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git', 'GitHub', 'VS Code'],
                professional: ['Problem Solving', 'Team Collaboration', 'Agile Methodology'],
                soft: ['Communication', 'Time Management', 'Adaptability'],
            },
            projects: {
                study: [
                    { title: 'Study Project 1', description: 'Academic projects demonstrating core concepts.', link: '#' },
                ],
                worked: [
                    { title: 'Worked Project 1', description: 'Real-world applications and freelance work.', link: '#' },
                ],
            },
            experience: [
                { role: 'Software Developer Intern', company: 'Company Name', duration: 'Jan 2024 - Present', description: 'Working on full-stack web development projects.' },
            ],
            certifications: [
                'Full Stack Web Development Bootcamp',
                'React Developer Certification',
            ],
            socials: {
                email: 'gowthamkr6672@gmail.com',
                phone: '+919876543210',
                whatsapp: 'https://wa.me/919876543210',
                linkedin: 'https://linkedin.com',
                github: 'https://github.com',
            },
        });

        console.log('Portfolio data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding portfolio:', error);
        process.exit(1);
    }
};

seedPortfolio();
