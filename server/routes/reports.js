const express = require('express');
const router = express.Router();
const { getReports, addReport } = require('../controllers/reportsController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, getReports);
router.post('/', verifyToken, addReport);

module.exports = router;
