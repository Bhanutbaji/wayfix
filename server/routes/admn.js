const express = require('express');
const router = express.Router();
const { fetchReports, updateReportStatus } = require('../controllers/adminController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/reports', verifyToken, fetchReports);
router.put('/reports/:id', verifyToken, updateReportStatus);

module.exports = router;
