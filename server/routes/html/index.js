const express = require('express');
const router = express.Router();
const testRoutes = require('./testRoutes');

router.use(testRoutes); 

module.exports = router; 