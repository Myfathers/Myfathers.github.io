var mongoose = require('mongoose');


var Userschema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
    gender: String,
    profile: String,
    avatar: String,

})
var User = mongoose.model('User', Userschema);

module.exports = User;