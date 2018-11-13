var mongoose = require('mongoose');


var Postschema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pv: {
        type: Number,
        default: 0
    },
    createdTime: {
        type: Date,
        default: Date.now()
    },
    comments: {
        type: Number,
        default: 0
    }

})
var Post = mongoose.model('Post', Postschema);

module.exports = Post;