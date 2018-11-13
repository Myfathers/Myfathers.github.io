var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('链接成功');
});
var todoschama = new mongoose.Schema({
    content: String,
    isFinished: {
        type: Boolean,
        default: false
    }
})
var Todo = mongoose.model('Todo', todoschama);

exports.Todo = Todo;