const router = require('express').Router(); 
const path = require('path')
const productRoutes = require('./product-routes'); 

router.use('/products', productRoutes);  

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });

module.exports = router;  