const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oppulentoddities');

module.exports = mongoose.connection;
