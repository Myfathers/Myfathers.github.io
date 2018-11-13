var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo
router.get('/:itemId', (req, res) => {
    var itemId = req.params.itemId;
    Todo.findById(itemId, (err, result) => {
        console.log(itemId);
        Todo.findByIdAndUpdate(itemId, {
            isFinished: !result.isFinished

        }, (err1, res) => {
            console.log('qoqoqoqoqo')
        })
    })

    res.redirect('/');

});


module.exports = router;