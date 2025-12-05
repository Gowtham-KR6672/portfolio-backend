const Portfolio = require('../models/portfolioModel');

// @desc    Get portfolio data
// @route   GET /api/portfolio
// @access  Public
const getPortfolio = async (req, res) => {
    try {
        let portfolio = await Portfolio.findOne();
        if (!portfolio) {
            // Create default if not exists
            portfolio = await Portfolio.create({
                skills: { technical: [], professional: [], soft: [] },
                projects: { study: [], worked: [] },
                experience: [],
                certifications: [],
                socials: {},
            });
        }
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update portfolio data
// @route   PUT /api/portfolio
// @access  Private (Admin)
const updatePortfolio = async (req, res) => {
    try {
        console.log('Update Portfolio Request Body:', JSON.stringify(req.body, null, 2));

        // Use findOneAndUpdate to update or create if not exists
        // upsert: true creates it if it doesn't exist
        // new: true returns the updated document
        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            {},
            { $set: req.body },
            { new: true, upsert: true, runValidators: true }
        );

        console.log('Portfolio Updated Successfully');
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        console.error('Update Portfolio Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { getPortfolio, updatePortfolio };
