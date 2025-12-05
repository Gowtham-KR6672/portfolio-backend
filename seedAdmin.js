const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/userModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const seedAdmin = async () => {
    try {
        // Check if admin exists
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;

        const userExists = await User.findOne({ email: adminEmail });

        if (userExists) {
            console.log('Admin user already exists');
            process.exit();
        }

        await User.create({
            email: adminEmail,
            password: adminPass,
        });

        console.log('Admin user created successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
