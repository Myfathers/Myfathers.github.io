var mongoose = require('mongoose')

// Schema
var commentsSchema = mongoose.Schema({
    postId: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdTime: {
        type: Date,
        default: Date.now()
    }
})

var Comments = mongoose.model('Comment', commentsSchema);
module.exports = Comments;