const db = require('../libs/mongo_connect')()
, Schema = require('mongoose').Schema;

// definicao do modelo de Livro que ja esta criado no MongoDB 
const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    username: String,
    password: String,
    gender: String
});

module.exports = db.model('users', UserSchema);