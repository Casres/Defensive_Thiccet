const express = require("express"); 
const router = express.Router(); 
const htmlRoutes = require("./html"); 
const apiRoutes = require("./api/index"); 
 
router.use("/", htmlRoutes); 
router.use("/api", apiRoutes); 

res.status(404).send(`<h1> 🤖 404 Error </h1>`); 
 
module.exports = router; 
