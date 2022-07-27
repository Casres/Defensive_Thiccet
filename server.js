const express = require("express");
const routes = require('./routes');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// this  uses JSON to transfer data to and from the DataBase
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/defensive-thiccet', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


// this is what you will need to set up a mongoDB and server