const mongoose = require('mongoose');

//TO DO: may need to update the default string
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/job-huntr');

module.exports = mongoose.connection;
