let mongoose = require('mongoose')
, single_connection
, options = {
    user: "admin",
    pass: "manager",
    useMongoClient: true
};

module.exports = function() {
    if (!single_connection) {
        single_connection = mongoose.connect(
            'mongodb://ds137686.mlab.com:37686', options
        );
    }

    return single_connection;
}