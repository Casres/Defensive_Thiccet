const router = require('express').Router(); 
const productRoutes = require('./product-routes'); 

router.use('/products', productRoutes);  


router.use((req, res) => {
  res.status(200).send(`<h1> API </h1>`);
});

module.exports = router;  
