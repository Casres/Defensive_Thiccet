const express = require('express');
const router = express.Router();
const htmlRoutes = require('./html');

router.use(htmlRoutes);

module.exports = router;