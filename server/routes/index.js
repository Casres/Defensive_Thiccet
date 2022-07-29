const router = require("express").Router();
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send(`<h1> 🤖 404 Error </h1>`);
});

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
