const express = require('express');
const { getPortfolio, updatePortfolio } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware'); // We need to create this
const router = express.Router();

router.get('/', getPortfolio);
router.put('/', protect, updatePortfolio);

module.exports = router;
