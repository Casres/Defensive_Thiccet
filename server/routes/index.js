const router = require('express').Router();
const accesories = require('./accessories-routes');
const clothing = require('./clothing-routes');

router.use('/accesories', accesories);
router.use('/clothing', clothing);

module.exports = router;