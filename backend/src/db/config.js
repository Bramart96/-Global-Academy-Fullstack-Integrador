const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI || 'mongodb+srv://bramart96:3105@bramart96.estsupk.mongodb.net/';
(async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log('database conectada');
    } catch (error) {
      console.log(error);
    } 
})()
module.exports = mongoose.connection;