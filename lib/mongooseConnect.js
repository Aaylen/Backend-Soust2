const mongoose = require('mongoose');

exports.mongooseConnect = () => {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
};
