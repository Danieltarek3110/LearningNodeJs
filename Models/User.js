const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        require: true
    }
} , {timestamps: true});

const User = mongoose.model('User' , UserSchema);
module.exports = User;