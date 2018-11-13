var express = require('express');
var router = express.Router();
// 导入Todo这个数据模型
var Todo = require('../lib/mongoose').Todo
router.post('/:itemId', (req, res) => {
    console.log(req.body)
    console.log(req.params.itemId)
        // res.send(req.params.itemId);
    var itemId = req.params.itemId

    Todo.findByIdAndUpdate(itemId, {
        content: req.body.item
    }, (err) => {
        console.log('更改成功')
        res.redirect('/');
    })

});


module.exports = router;