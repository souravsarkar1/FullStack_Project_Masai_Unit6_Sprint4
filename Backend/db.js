const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/FullStack_Project_Masai_Unit6_Sprint4');

module.exports = { connection };