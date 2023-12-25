const mongoose = require('mongoose');

exports.mongooseconnect = () => {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
};
