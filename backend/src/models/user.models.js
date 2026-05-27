const {mongoose, Schema} = require('mongoose');

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true    
    },
    password: {
        type: String,
        required: true,
        minlenght: 6
    },
    age: {
        type: Number,
        required: false
    },
    rol: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}); 
module.exports = mongoose.model('user', userSchema); 
