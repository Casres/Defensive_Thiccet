const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 3001;

const fs = require('fs');

const mongoose = require('mongoose');


app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.get('*', (req, res) => {

});
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3001/defensive-thiccet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});